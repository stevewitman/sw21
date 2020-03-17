import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';


export const stateFeatureKey = 'state';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = [];
