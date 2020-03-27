import { combineReducers } from "redux";
import {reducer as FormReducer} from "redux-form";
import testReducer from "../../feature/testarea/testReducer";
import eventReducer from "../../feature/events/eventReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer
});

export default rootReducer;