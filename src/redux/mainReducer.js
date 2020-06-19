import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView3268651Reducer from '../features/CalendarView3268651/redux/reducers';
import CalendarView2368641Reducer from '../features/CalendarView2368641/redux/reducers';
import CalendarView1668636Reducer from '../features/CalendarView1668636/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView3268651: CalendarView3268651Reducer,
CalendarView2368641: CalendarView2368641Reducer,
CalendarView1668636: CalendarView1668636Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});