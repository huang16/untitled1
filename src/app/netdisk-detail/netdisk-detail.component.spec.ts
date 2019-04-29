import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetdiskDetailComponent } from './netdisk-detail.component';

describe('NetdiskDetailComponent', () => {
  let component: NetdiskDetailComponent;
  let fixture: ComponentFixture<NetdiskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetdiskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetdiskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
