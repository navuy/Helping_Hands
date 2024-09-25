import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperHomeComponent } from './helper-home.component';

describe('HelperHomeComponent', () => {
  let component: HelperHomeComponent;
  let fixture: ComponentFixture<HelperHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelperHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelperHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
