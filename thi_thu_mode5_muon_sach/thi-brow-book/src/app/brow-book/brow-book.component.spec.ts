import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowBookComponent } from './brow-book.component';

describe('BrowBookComponent', () => {
  let component: BrowBookComponent;
  let fixture: ComponentFixture<BrowBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
