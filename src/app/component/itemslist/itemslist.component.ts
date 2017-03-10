import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {

  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

}
