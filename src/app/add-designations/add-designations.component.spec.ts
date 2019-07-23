import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignationsComponent } from './add-designations.component';

describe('AddDesignationsComponent', () => {
  let component: AddDesignationsComponent;
  let fixture: ComponentFixture<AddDesignationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesignationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
