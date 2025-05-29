import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSubmissionComponent } from './payment-submission.component';

describe('PaymentSubmissionComponent', () => {
  let component: PaymentSubmissionComponent;
  let fixture: ComponentFixture<PaymentSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentSubmissionComponent]
    });
    fixture = TestBed.createComponent(PaymentSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
