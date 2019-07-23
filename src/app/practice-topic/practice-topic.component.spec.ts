import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTopicComponent } from './practice-topic.component';

describe('PracticeTopicComponent', () => {
  let component: PracticeTopicComponent;
  let fixture: ComponentFixture<PracticeTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
