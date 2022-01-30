import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpaceFormComponent } from './new-space-form.component';

describe('NewSpaceFormComponent', () => {
  let component: NewSpaceFormComponent;
  let fixture: ComponentFixture<NewSpaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpaceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
