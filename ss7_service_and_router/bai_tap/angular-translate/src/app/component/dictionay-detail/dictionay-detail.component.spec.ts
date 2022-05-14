import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionayDetailComponent } from './dictionay-detail.component';

describe('DictionayDetailComponent', () => {
  let component: DictionayDetailComponent;
  let fixture: ComponentFixture<DictionayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
