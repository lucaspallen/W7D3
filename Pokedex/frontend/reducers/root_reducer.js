import { combineReducers } from 'redux';
import { entitiesReducer } from './entities_reducer';
import itemsReducer from './items_reducer';
import uiReducer from './ui_reducer';

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  items: itemsReducer,
  ui: uiReducer
});
