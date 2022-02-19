import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budgget-item-list',
  templateUrl: './budgget-item-list.component.html',
  styleUrls: ['./budgget-item-list.component.scss']
})



export class BudggetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update:EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  onDeleteButtonClicked(item:BudgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item:BudgetItem){
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width:'580px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }
}

export interface UpdateEvent{
  [x: string]: BudgetItem;
  old:BudgetItem;
  new:BudgetItem;
}