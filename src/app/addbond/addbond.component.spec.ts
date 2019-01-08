import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbondComponent } from './addbond.component';

describe('AddbondComponent', () => {
  let component: AddbondComponent;
  let fixture: ComponentFixture<AddbondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
