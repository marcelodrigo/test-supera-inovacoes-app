import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedTemplateComponent } from './authenticated-template.component';

describe('AuthenticatedTemplateComponent', () => {
  let component: AuthenticatedTemplateComponent;
  let fixture: ComponentFixture<AuthenticatedTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatedTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
