import { combineReducers } from "redux";
import {reducer as FormReducer} from "redux-form";
import testReducer from "../../feature/testarea/testReducer";
import eventReducer from "../../feature/events/eventReducer";
import modalReducer from "../../feature/modals/modalReducer";
import authReducer from "../../feature/auth/authReducer";
import asyncReducer from "../../feature/async/asyncReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
});

export default rootReducer;