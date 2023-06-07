import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpdashboardComponent } from './otpdashboard.component';

describe('OtpdashboardComponent', () => {
  let component: OtpdashboardComponent;
  let fixture: ComponentFixture<OtpdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
