import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMenusdeleteComponent } from './popup-menusdelete.component';

describe('PopupMenusdeleteComponent', () => {
  let component: PopupMenusdeleteComponent;
  let fixture: ComponentFixture<PopupMenusdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMenusdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMenusdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
