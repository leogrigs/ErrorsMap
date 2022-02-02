import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGuideComponent } from './entry-guide.component';

describe('EntryGuideComponent', () => {
  let component: EntryGuideComponent;
  let fixture: ComponentFixture<EntryGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
