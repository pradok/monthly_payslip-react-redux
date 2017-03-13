import React from 'react'
import assert from "assert"
import {shallow} from 'enzyme'

import EmployeePaymentSlipComponent from "../../../../src/modules/employeePaySlip/components/EmployeePaymentSlipComponent"

const setup = employeePaymentSlipProps => {

    const component = shallow(
        <EmployeePaymentSlipComponent {...employeePaymentSlipProps} />
    );

    return {
        component: component,
    }
};

let employeePaymentSlipProps;

describe('EmployeePaymentSlipComponent component', () => {
    beforeEach(() => {
        employeePaymentSlipProps =  {
            payPeriod: "01 March - 31 March",
            employeeName: "David Rudd",
            grossIncome: 5004,
            incomeTax: 92,
            netIncome: 4082,
            superAnnuation: 450,
        }
    });
    describe('render()', () => {
        it('should render the Employee Pay Slip', () => {
            const { component } = setup(employeePaymentSlipProps);
            assert.deepEqual(component.instance().props, employeePaymentSlipProps);
        });
    });


});