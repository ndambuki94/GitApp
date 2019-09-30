import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchappComponent } from './searchapp.component';

describe('SearchappComponent', () => {
  let component: SearchappComponent;
  let fixture: ComponentFixture<SearchappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
