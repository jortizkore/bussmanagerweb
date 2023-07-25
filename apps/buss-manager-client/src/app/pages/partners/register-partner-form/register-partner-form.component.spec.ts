import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPartnerFormComponent } from './register-partner-form.component';

describe('RegisterPartnerFormComponent', () => {
  let component: RegisterPartnerFormComponent;
  let fixture: ComponentFixture<RegisterPartnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPartnerFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPartnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
