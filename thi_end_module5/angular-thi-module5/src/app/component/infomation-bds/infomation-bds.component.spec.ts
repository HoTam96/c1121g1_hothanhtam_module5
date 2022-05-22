import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationBdsComponent } from './infomation-bds.component';

describe('InfomationBdsComponent', () => {
  let component: InfomationBdsComponent;
  let fixture: ComponentFixture<InfomationBdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomationBdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationBdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
