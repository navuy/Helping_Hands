import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyRegisterComponent } from './needy-register.component';

describe('NeedyRegisterComponent', () => {
  let component: NeedyRegisterComponent;
  let fixture: ComponentFixture<NeedyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeedyRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeedyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
