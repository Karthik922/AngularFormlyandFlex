import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexformComponent } from './flexform.component';

describe('FlexformComponent', () => {
  let component: FlexformComponent;
  let fixture: ComponentFixture<FlexformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
