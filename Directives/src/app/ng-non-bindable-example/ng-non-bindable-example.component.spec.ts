import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNonBindableExampleComponent } from './ng-non-bindable-example.component';

describe('NgNonBindableExampleComponent', () => {
  let component: NgNonBindableExampleComponent;
  let fixture: ComponentFixture<NgNonBindableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNonBindableExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNonBindableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
