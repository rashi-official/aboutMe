import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePageComponent } from './subscribe-page.component';

describe('SubscribePageComponent', () => {
  let component: SubscribePageComponent;
  let fixture: ComponentFixture<SubscribePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribePageComponent]
    });
    fixture = TestBed.createComponent(SubscribePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
