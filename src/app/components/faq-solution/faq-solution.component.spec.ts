import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSolutionComponent } from './faq-solution.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';

describe('FaqSolutionComponent', () => {
  let component: FaqSolutionComponent;
  let fixture: ComponentFixture<FaqSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSolutionComponent ],
      imports: [ RouterTestingModule, MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
