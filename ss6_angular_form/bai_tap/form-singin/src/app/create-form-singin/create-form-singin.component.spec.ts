import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormSinginComponent } from './create-form-singin.component';

describe('CreateFormSinginComponent', () => {
  let component: CreateFormSinginComponent;
  let fixture: ComponentFixture<CreateFormSinginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormSinginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormSinginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
