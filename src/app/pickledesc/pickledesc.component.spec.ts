import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickledescComponent } from './pickledesc.component';

describe('PickledescComponent', () => {
  let component: PickledescComponent;
  let fixture: ComponentFixture<PickledescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickledescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickledescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
