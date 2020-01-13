import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLineComponent } from './tag-line.component';

describe('TagLineComponent', () => {
  let component: TagLineComponent;
  let fixture: ComponentFixture<TagLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
