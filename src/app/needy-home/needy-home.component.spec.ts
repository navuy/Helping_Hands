import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyHomeComponent } from './needy-home.component';

describe('NeedyHomeComponent', () => {
  let component: NeedyHomeComponent;
  let fixture: ComponentFixture<NeedyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeedyHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeedyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
