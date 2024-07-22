import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComicDetailComponent } from './card-comic-detail.component';

describe('CardComicDetailComponent', () => {
  let component: CardComicDetailComponent;
  let fixture: ComponentFixture<CardComicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComicDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
