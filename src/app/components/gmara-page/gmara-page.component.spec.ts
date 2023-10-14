import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmaraPageComponent } from './gmara-page.component';

describe('GmaraPageComponent', () => {
  let component: GmaraPageComponent;
  let fixture: ComponentFixture<GmaraPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmaraPageComponent]
    });
    fixture = TestBed.createComponent(GmaraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
