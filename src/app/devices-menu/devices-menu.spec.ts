import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesMenu } from './devices-menu';

describe('DevicesMenu', () => {
  let component: DevicesMenu;
  let fixture: ComponentFixture<DevicesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevicesMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
