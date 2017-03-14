import {call, put} from "redux-saga/effects";
import assert from "assert";

import ApiTaxableIncome  from "../../../../src/modules/employeePay/api/taxableIncome";
import {employeeDetails} from "../../../../src/modules/employeePay/sagas/employeePay"

describe('employeePay saga', () => {
  describe('ApiTaxableIncome()', () => {
    const action = {
      employeeDetails: {
        payPeriod: "01 March - 31 March",
        employeeName: "David Rudd",
        grossIncome: 5004,
        incomeTax: 92,
        netIncome: 4082,
        superAnnuation: 450,
      }
    }
    const generator = employeeDetails(action);

    it('should return the ApiTaxableIncome.taxableIncome call', () => {
      assert.deepEqual(generator.next().value, call(ApiTaxableIncome.taxableIncome));
    });

    it('should return the EMPLOYEE_DETAILS_CALCULATE_PAY action', () => {
      assert.deepEqual(generator.next().value, put({
        type: 'EMPLOYEE_DETAILS_CALCULATE_PAY',
        employeeDetails: action.employeeDetails
      }));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

});
