import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { items } from './store/items.store';
import { selectedItem } from './store/selectedItems.store';
import { ItemsService } from './service/items.service';
import { ItemdetailsComponent } from './component/itemdetails/itemdetails.component';
import { ItemslistComponent } from './component/itemslist/itemslist.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemslistComponent,
    ItemdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ items: items, selectedItem: selectedItem}),
    ReactiveFormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
