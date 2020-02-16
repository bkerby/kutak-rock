import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSolutionComponent } from './faq-solution.component';

describe('FaqSolutionComponent', () => {
  let component: FaqSolutionComponent;
  let fixture: ComponentFixture<FaqSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSolutionComponent ]
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
