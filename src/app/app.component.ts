import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { UtilitiesService } from './services/utilities/utilities.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MachineInfoDialogComponent } from './components/machine-info-dialog/machine-info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Kutak Rock Tech Support';
  mobileQuery: MediaQueryList;
  machineInfoDialog: MatDialogRef<MachineInfoDialogComponent>;

  private mobileQueryListener: () => void;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    public utils: UtilitiesService,
    public dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  openMachineInformationDialog() {
    this.utils.getIPInfo().subscribe((ipInfo: any) => {
      this.utils.getMachineId(ipInfo.ip).subscribe((machineId: any) => {
        this.machineInfoDialog = this.dialog.open(MachineInfoDialogComponent,
          {
            data:
            {
              machineId: machineId.GetComputerResult,
              publicIP: ipInfo.ip
            }
          });
      });
    });
  }

}
