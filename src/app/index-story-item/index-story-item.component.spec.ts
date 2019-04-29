import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStoryItemComponent } from './index-story-item.component';

describe('IndexStoryItemComponent', () => {
  let component: IndexStoryItemComponent;
  let fixture: ComponentFixture<IndexStoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexStoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexStoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
