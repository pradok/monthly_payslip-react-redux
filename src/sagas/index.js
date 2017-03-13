import {takeLatest} from "redux-saga";
import {fork} from "redux-saga/effects";
import {employeeDetails} from "../modules/employeePay/sagas/employeePay";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'EMPLOYEE_DETAILS', employeeDetails),
    ];
}
