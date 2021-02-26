import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomerComponent } from './randomer.component';

describe('RandomerComponent', () => {
  let component: RandomerComponent;
  let fixture: ComponentFixture<RandomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
