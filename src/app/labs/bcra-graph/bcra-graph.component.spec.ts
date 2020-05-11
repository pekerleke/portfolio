import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcraGraphComponent } from './bcra-graph.component';

describe('BcraGraphComponent', () => {
  let component: BcraGraphComponent;
  let fixture: ComponentFixture<BcraGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcraGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcraGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
