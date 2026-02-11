import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCutscene } from './intro-cutscene';

describe('IntroCutscene', () => {
  let component: IntroCutscene;
  let fixture: ComponentFixture<IntroCutscene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroCutscene]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroCutscene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
