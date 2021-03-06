import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployesComponent } from './add-employes.component';

describe('AddEmployesComponent', () => {
  let component: AddEmployesComponent;
  let fixture: ComponentFixture<AddEmployesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
