import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSpaceComponent } from './explore-space.component';

describe('ExploreSpaceComponent', () => {
  let component: ExploreSpaceComponent;
  let fixture: ComponentFixture<ExploreSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
