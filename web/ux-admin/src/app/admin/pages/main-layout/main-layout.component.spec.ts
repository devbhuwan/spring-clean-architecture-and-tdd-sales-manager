import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainLayoutComponent} from './main-layout.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ClarityModule} from '@clr/angular';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        imports: [RouterTestingModule, ClarityModule],
        declarations: [MainLayoutComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
