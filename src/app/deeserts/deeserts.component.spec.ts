import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeesertsComponent } from './deeserts.component';

describe('DeesertsComponent', () => {
  let component: DeesertsComponent;
  let fixture: ComponentFixture<DeesertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeesertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeesertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
