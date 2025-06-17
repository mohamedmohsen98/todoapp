import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renderlist } from './renderlist';

describe('Renderlist', () => {
  let component: Renderlist;
  let fixture: ComponentFixture<Renderlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Renderlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Renderlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
