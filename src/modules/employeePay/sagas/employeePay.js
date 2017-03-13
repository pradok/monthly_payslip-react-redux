import { call, put } from "redux-saga/effects";
import ApiTaxableIncome from "../api/taxableIncome";

export function* employeeDetails(action) {
    const taxableIncome = yield call(ApiTaxableIncome.taxableIncome);
    action.employeeDetails.taxableIncome = taxableIncome;

    // pass Employee details from the form to the state for further payslip logic.
    yield put({
        type: 'EMPLOYEE_DETAILS_CALCULATE_PAY',
        employeeDetails: action.employeeDetails,
    });
}