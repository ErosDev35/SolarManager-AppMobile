import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDevice } from './select-device';

describe('SelectDevice', () => {
  let component: SelectDevice;
  let fixture: ComponentFixture<SelectDevice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDevice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDevice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
