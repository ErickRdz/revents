import { combineReducers } from "redux";
import {reducer as FormReducer} from "redux-form";
import {reducer as ToastrReducer} from "react-redux-toastr";
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
    async: asyncReducer,
    toastr: ToastrReducer
});

export default rootReducer;