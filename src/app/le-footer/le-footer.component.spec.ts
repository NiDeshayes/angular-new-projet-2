import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeFooterComponent } from './le-footer.component';

describe('LeFooterComponent', () => {
  let component: LeFooterComponent;
  let fixture: ComponentFixture<LeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
