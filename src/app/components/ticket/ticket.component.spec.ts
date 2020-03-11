import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponent } from './ticket.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from 'src/app/shared/filter.pipe';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketComponent, FilterPipe ],
      imports: [ RouterTestingModule, MaterialModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
