import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCardsComponent } from './name-cards.component';

describe('NameCardsComponent', () => {
  let component: NameCardsComponent;
  let fixture: ComponentFixture<NameCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
