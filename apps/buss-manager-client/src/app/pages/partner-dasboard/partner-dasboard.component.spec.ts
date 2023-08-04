import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerDasboardComponent } from './partner-dasboard.component';

describe('PartnerDasboardComponent', () => {
  let component: PartnerDasboardComponent;
  let fixture: ComponentFixture<PartnerDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerDasboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
