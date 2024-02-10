import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTimesComponent } from './saved-times.component';

describe('SavedTimesComponent', () => {
  let component: SavedTimesComponent;
  let fixture: ComponentFixture<SavedTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedTimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
