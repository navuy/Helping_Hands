import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePostNeedyComponent } from './manage-post-needy.component';

describe('ManagePostNeedyComponent', () => {
  let component: ManagePostNeedyComponent;
  let fixture: ComponentFixture<ManagePostNeedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagePostNeedyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagePostNeedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
