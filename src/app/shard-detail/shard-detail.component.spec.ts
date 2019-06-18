import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardDetailComponent } from './shard-detail.component';

describe('ShardDetailComponent', () => {
  let component: ShardDetailComponent;
  let fixture: ComponentFixture<ShardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
