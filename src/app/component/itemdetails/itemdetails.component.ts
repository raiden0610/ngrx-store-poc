import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../model/item.model';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  originalName: string;
  selectedItem: Item; // Every time the "item" input is changed, we copy it locally (and keep the original name to display)
  itemForm: FormGroup;
  name: FormControl;
  description: FormControl;

  index: number;

  @Output() saved = new EventEmitter<Item>();
  @Output() cancelled = new EventEmitter<Item>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.name = this.fb.control('');
    this.description = this.fb.control('');

    this.index = 1;
    this.itemForm = new FormGroup({
      name: this.name,
      description: this.description
    });
  }

  @Input('item')
  set _item(value: Item) {
    if (value) {
      this.originalName = value.name;
    }
    this.selectedItem = Object.assign({}, value);
  }

  cancel(item: Item) {
    this.cancelled.emit(this.selectedItem);
  }

  save(item: Item) {
    this.selectedItem.id = this.selectedItem.id++;
    this.originalName = this.name.value;
    this.selectedItem.name = this.name.value;
    this.selectedItem.description = this.description.value;
    this.saved.emit(this.selectedItem);
  }

}