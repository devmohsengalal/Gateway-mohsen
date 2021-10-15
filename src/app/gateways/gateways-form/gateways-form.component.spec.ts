import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaysFormComponent } from './gateways-form.component';

describe('GatewaysFormComponent', () => {
  let component: GatewaysFormComponent;
  let fixture: ComponentFixture<GatewaysFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaysFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaysFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
