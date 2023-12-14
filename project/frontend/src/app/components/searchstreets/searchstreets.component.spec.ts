import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstreetsComponent } from './searchstreets.component';

describe('SearchstreetsComponent', () => {
  let component: SearchstreetsComponent;
  let fixture: ComponentFixture<SearchstreetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchstreetsComponent]
    });
    fixture = TestBed.createComponent(SearchstreetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
