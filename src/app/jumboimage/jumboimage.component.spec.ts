import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboimageComponent } from './jumboimage.component';

describe('JumboimageComponent', () => {
  let component: JumboimageComponent;
  let fixture: ComponentFixture<JumboimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
