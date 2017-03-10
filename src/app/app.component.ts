import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from './model/item.model';
import { ItemsService } from './service/items.service';
import { Store } from '@ngrx/store';
import { AppStore } from './model/appstore.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Items manager';

  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;

  constructor(private itemsService: ItemsService, private store: Store<AppStore>) {
    this.items = itemsService.items; // Bind to the 'items' observable on the 'ItemsService'
    this.selectedItem = store.select('selectedItem'); // Bind the 'selectedItem' observable from the store
    this.selectedItem.subscribe(v => console.log(v));
    itemsService.loadItems(); // "itemsService.loadItems" dispatches the "ADD_ITEMS" event to our store,
    // which in turn updates the "items" collection
  }

  selectItem(item: Item) {
    this.store.dispatch({ type: 'SELECT_ITEM', payload: item });
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);
  }

  resetItem() {
    let emptyItem: Item = { id: null, name: '', description: '' };
    this.store.dispatch({ type: 'SELECT_ITEM', payload: emptyItem });
  }
  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }
}