import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListComponent } from './faq-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/shared/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FaqListComponent', () => {
  let component: FaqListComponent;
  let fixture: ComponentFixture<FaqListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqListComponent, FilterPipe ],
      imports: [ RouterTestingModule, MaterialModule, FormsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
