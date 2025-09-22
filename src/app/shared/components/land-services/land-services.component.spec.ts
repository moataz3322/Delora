import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandServicesComponent } from './land-services.component';

describe('LandServicesComponent', () => {
  let component: LandServicesComponent;
  let fixture: ComponentFixture<LandServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
