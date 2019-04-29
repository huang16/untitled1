import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetdiskKindComponent } from './netdisk-kind.component';

describe('NetdiskKindComponent', () => {
  let component: NetdiskKindComponent;
  let fixture: ComponentFixture<NetdiskKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetdiskKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetdiskKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
