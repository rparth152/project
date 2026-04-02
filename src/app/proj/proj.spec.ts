import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj } from './proj';

describe('Proj', () => {
  let component: Proj;
  let fixture: ComponentFixture<Proj>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proj],
    }).compileComponents();

    fixture = TestBed.createComponent(Proj);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
