import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBottom } from './menu-bottom';

describe('MenuBottom', () => {
  let component: MenuBottom;
  let fixture: ComponentFixture<MenuBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBottom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
