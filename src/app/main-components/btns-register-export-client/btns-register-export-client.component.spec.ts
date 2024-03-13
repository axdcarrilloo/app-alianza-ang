import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsRegisterExportClientComponent } from './btns-register-export-client.component';

describe('BtnsRegisterExportClientComponent', () => {
  let component: BtnsRegisterExportClientComponent;
  let fixture: ComponentFixture<BtnsRegisterExportClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnsRegisterExportClientComponent]
    });
    fixture = TestBed.createComponent(BtnsRegisterExportClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
