import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OmniMenuComponent } from './omni-menu.component';

describe('OmniMenuComponent', () => {
  let component: OmniMenuComponent;
  let fixture: ComponentFixture<OmniMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OmniMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OmniMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
