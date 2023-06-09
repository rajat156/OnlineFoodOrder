import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDealsComponent } from './today-deals.component';

describe('TodayDealsComponent', () => {
  let component: TodayDealsComponent;
  let fixture: ComponentFixture<TodayDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
