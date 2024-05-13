import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FostersComponent } from './fosters.component';

describe('FostersComponent', () => {
  let component: FostersComponent;
  let fixture: ComponentFixture<FostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FostersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
