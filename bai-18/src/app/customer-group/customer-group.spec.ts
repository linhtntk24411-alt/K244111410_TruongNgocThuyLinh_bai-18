import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerGroup } from './customer-group';

describe('CustomerGroup', () => {
  let component: CustomerGroup;
  let fixture: ComponentFixture<CustomerGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
