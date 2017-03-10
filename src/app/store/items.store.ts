import { Action } from '@ngrx/store';
import { Item } from '../model/item.model';

export function items(state: any = [], action: Action): Item[] {
  switch (action.type) {
    case 'ADD_ITEMS':
      return action.payload;
    case 'CREATE_ITEM':
      return [...state, action.payload];
    case 'UPDATE_ITEM':
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, action.payload) : item;
      });
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.id !== action.payload.id;
      });
    default:
      return state;
  }
};