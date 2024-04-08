import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeHeaderComponent } from './le-header.component';

describe('LeHeaderComponent', () => {
  let component: LeHeaderComponent;
  let fixture: ComponentFixture<LeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
