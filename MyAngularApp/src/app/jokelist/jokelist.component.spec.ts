import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokelistComponent } from './jokelist.component';

describe('JokelistComponent', () => {
  let component: JokelistComponent;
  let fixture: ComponentFixture<JokelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
