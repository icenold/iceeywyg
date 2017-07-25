import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceeyEditorComponent } from './iceey-editor.component';

describe('IceeyEditorComponent', () => {
  let component: IceeyEditorComponent;
  let fixture: ComponentFixture<IceeyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceeyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceeyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
