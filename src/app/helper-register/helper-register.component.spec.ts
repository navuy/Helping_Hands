import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperRegisterComponent } from './helper-register.component';

describe('HelperRegisterComponent', () => {
  let component: HelperRegisterComponent;
  let fixture: ComponentFixture<HelperRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelperRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelperRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
