import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponentsComponent } from './core-components.component';

describe('CoreComponentsComponent', () => {
  let component: CoreComponentsComponent;
  let fixture: ComponentFixture<CoreComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreComponentsComponent]
    });
    fixture = TestBed.createComponent(CoreComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
