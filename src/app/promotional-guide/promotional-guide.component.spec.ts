import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalGuideComponent } from './promotional-guide.component';

describe('PromotionalGuideComponent', () => {
  let component: PromotionalGuideComponent;
  let fixture: ComponentFixture<PromotionalGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
