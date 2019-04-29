import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetdiskComponent } from './netdisk.component';

describe('NetdiskComponent', () => {
  let component: NetdiskComponent;
  let fixture: ComponentFixture<NetdiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetdiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
