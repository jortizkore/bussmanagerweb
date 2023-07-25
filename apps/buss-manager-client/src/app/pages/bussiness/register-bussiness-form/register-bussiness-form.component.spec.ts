import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterBussinessFormComponent } from './register-bussiness-form.component';

describe('RegisterBussinessFormComponent', () => {
  let component: RegisterBussinessFormComponent;
  let fixture: ComponentFixture<RegisterBussinessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterBussinessFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterBussinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
