import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendcatComponent } from './trendcat.component';

describe('TrendcatComponent', () => {
  let component: TrendcatComponent;
  let fixture: ComponentFixture<TrendcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendcatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
