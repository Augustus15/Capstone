import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNservicesComponent } from './products-nservices.component';

describe('ProductsNservicesComponent', () => {
  let component: ProductsNservicesComponent;
  let fixture: ComponentFixture<ProductsNservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsNservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsNservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
