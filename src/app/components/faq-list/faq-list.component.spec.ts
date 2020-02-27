import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListComponent } from './faq-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';

describe('FaqListComponent', () => {
  let component: FaqListComponent;
  let fixture: ComponentFixture<FaqListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqListComponent ],
      imports: [ RouterTestingModule, MaterialModule, FormsModule ]
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
