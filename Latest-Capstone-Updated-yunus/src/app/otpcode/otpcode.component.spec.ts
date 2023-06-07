import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpcodeComponent } from './otpcode.component';

describe('OtpcodeComponent', () => {
  let component: OtpcodeComponent;
  let fixture: ComponentFixture<OtpcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
