import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitepageHandComponent } from './whitepage-hand.component';

describe('WhitepageHandComponent', () => {
  let component: WhitepageHandComponent;
  let fixture: ComponentFixture<WhitepageHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitepageHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitepageHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
