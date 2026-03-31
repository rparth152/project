import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpStatus } from './emp-status';

describe('EmpStatus', () => {
  let component: EmpStatus;
  let fixture: ComponentFixture<EmpStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
