import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkflawComponent } from './perkflaw.component';

describe('PerkflawComponent', () => {
  let component: PerkflawComponent;
  let fixture: ComponentFixture<PerkflawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerkflawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerkflawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
