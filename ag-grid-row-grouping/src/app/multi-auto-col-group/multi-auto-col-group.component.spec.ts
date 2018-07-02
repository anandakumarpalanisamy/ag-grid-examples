import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAutoColGroupComponent } from './multi-auto-col-group.component';

describe('MultiAutoColGroupComponent', () => {
  let component: MultiAutoColGroupComponent;
  let fixture: ComponentFixture<MultiAutoColGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiAutoColGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAutoColGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
