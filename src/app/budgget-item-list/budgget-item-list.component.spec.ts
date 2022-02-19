import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudggetItemListComponent } from './budgget-item-list.component';

describe('BudggetItemListComponent', () => {
  let component: BudggetItemListComponent;
  let fixture: ComponentFixture<BudggetItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudggetItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudggetItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
