import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourorderComponent } from './yourorder.component';

describe('YourorderComponent', () => {
  let component: YourorderComponent;
  let fixture: ComponentFixture<YourorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
