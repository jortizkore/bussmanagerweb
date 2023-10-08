import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BussinessListCardComponent } from './bussiness-list-card.component';

describe('BussinessListCardComponent', () => {
  let component: BussinessListCardComponent;
  let fixture: ComponentFixture<BussinessListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BussinessListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BussinessListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
