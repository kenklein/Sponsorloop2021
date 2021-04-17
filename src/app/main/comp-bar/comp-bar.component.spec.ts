import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBarComponent } from './comp-bar.component';

describe('CompBarComponent', () => {
  let component: CompBarComponent;
  let fixture: ComponentFixture<CompBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
