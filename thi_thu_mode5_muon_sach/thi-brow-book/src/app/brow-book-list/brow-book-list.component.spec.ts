import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowBookListComponent } from './brow-book-list.component';

describe('BrowBookListComponent', () => {
  let component: BrowBookListComponent;
  let fixture: ComponentFixture<BrowBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
