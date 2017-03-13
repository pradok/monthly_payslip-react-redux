import assert from "assert";

import employeePay from "../../../../src/modules/employeePay/reducers/employeePay"

describe('employeePay reducers', () => {
    const taxableIncome = [
        {
            min: 0,
            max: 18200,
            percent: 0,
            amount: 0
        },
        {
            min: 18201,
            max: 37000,
            over: 18200,
            percent: 19,
            amount: 0
        },
        {
            min: 37001,
            max: 80000,
            over: 37000,
            percent: 32.5,
            amount: 3572
        },
        {
            min: 80001,
            max: 180000,
            over: 80000,
            percent: 37,
            amount: 17547
        },
        {
            min: 180001,
            max: null,
            over: 180000,
            percent: 45,
            amount: 54547
        }

    ];

    const employeeDetails = {
        annualSalary: "60050",
        firstName: "David",
        lastName: "Rudd",
        paymentStartDate: "2017-03-01",
        superAnnuation: "9",
        taxableIncome: taxableIncome
    };


    const state = {
        payPeriod: "01 March - 31 March",
        employeeName: "David Rudd",
        grossIncome: 5004,
        incomeTax: 922,
        netIncome: 4082,
        superAnnuation: 450
    };


    it('should provide the initial state', () => {
        assert.deepEqual(
            employeePay({},
                {}
            ),
            {}
        );
    });


    describe('EMPLOYEE_DETAILS_CALCULATE_PAY', () => {
        it('should perform EMPLOYEE_DETAILS_CALCULATE_PAY action', () => {
            assert.deepEqual(
                employeePay({},
                    {type: 'EMPLOYEE_DETAILS_CALCULATE_PAY', employeeDetails: employeeDetails}
                ),
                state
            );
        })

    });

});
