import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssetComponent } from './request-asset.component';

describe('RequestAssetComponent', () => {
  let component: RequestAssetComponent;
  let fixture: ComponentFixture<RequestAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestAssetComponent]
    });
    fixture = TestBed.createComponent(RequestAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
