import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsViewsComponent } from './clients-views.component';

describe('ClientsViewsComponent', () => {
  let component: ClientsViewsComponent;
  let fixture: ComponentFixture<ClientsViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsViewsComponent]
    });
    fixture = TestBed.createComponent(ClientsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
