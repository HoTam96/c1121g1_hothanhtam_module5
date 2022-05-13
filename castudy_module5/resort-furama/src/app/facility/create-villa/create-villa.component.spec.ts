import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVillaComponent } from './create-villa.component';

describe('CreateVillaComponent', () => {
  let component: CreateVillaComponent;
  let fixture: ComponentFixture<CreateVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
