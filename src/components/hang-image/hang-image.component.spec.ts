import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangImageComponent } from './hang-image.component';

describe('HangImageComponent', () => {
  let component: HangImageComponent;
  let fixture: ComponentFixture<HangImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
