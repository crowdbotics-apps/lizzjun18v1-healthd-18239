import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView3268651Saga from '../features/CalendarView3268651/redux/sagas';
import CalendarView2368641Saga from '../features/CalendarView2368641/redux/sagas';
import CalendarView1668636Saga from '../features/CalendarView1668636/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView3268651Saga,
CalendarView2368641Saga,
CalendarView1668636Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}