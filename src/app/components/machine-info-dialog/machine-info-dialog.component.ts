import { Component, OnInit, Inject } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-machine-info-dialog',
  templateUrl: './machine-info-dialog.component.html',
  styleUrls: ['./machine-info-dialog.component.scss']
})
export class MachineInfoDialogComponent implements OnInit {

  machineInfo: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public utils: UtilitiesService
  ) { }

  ngOnInit() {
    this.utils.getMachineInfo(this.data.machineId).subscribe((info: any) => {
      this.machineInfo = info;
    });
  }

}
