import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input()
  item!: BudgetItem;
  @Output() formSubmit:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem!: boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.isNewItem = false
    }else{
      this.isNewItem = true;
      this.item = new BudgetItem('', null as any);
    }
  }

  onSubmit(form:NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
