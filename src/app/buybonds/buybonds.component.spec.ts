import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuybondsComponent } from './buybonds.component';

describe('BuybondsComponent', () => {
  let component: BuybondsComponent;
  let fixture: ComponentFixture<BuybondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuybondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuybondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
