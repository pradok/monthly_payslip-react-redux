import React, {PropTypes} from 'react'


const EmployeePaymentSlipComponent = (props) => {
    const propsEmpty = Object.keys(props).length;
    const {payPeriod, employeeName, grossIncome, incomeTax, netIncome, superAnnuation} = props;

    if (props.constructor === Object && propsEmpty == 0) {
        return (
            <div>
                <legend>Pay Slip</legend>
                <p>Unable to print Pay Slip. No Employee details provided</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <legend>Payslip</legend>
                <div>
                    <label>Pay Slip for the month: </label> {payPeriod}
                </div>
                <div>
                    <label>Employee Name:</label> {employeeName}
                </div>
                <div>
                    <label>Gross Income:</label> {grossIncome}
                </div>
                <div>
                    <label>Income Tax:</label> {incomeTax}
                </div>
                <div>
                    <label>Net Income:</label> {netIncome}
                </div>
                <div>
                    <label>Super:</label> {superAnnuation}
                </div>
            </div>
        )
    }

}


EmployeePaymentSlipComponent.propTypes = {
    payPeriod: PropTypes.string,
    employeeName: PropTypes.string,
    grossIncome: PropTypes.number,
    incomeTax: PropTypes.number,
    netIncome: PropTypes.number,
    superAnnuation: PropTypes.number,
}


export default EmployeePaymentSlipComponent;