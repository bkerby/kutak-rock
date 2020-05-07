import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineInfoDialogComponent } from './machine-info-dialog.component';

describe('MachineInfoDialogComponent', () => {
  let component: MachineInfoDialogComponent;
  let fixture: ComponentFixture<MachineInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
