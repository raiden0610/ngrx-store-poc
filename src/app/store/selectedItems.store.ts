// The "selectedItem" reducer handles the currently selected item
import { Action } from '@ngrx/store';
import { Item } from '../model/item.model';

export function selectedItem(state: any = null, action: Action): Item {
    switch (action.type) {
        case 'SELECT_ITEM':
            return action.payload;
        default:
            return state;
    }
};