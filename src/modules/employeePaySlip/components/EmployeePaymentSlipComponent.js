import React, {PropTypes} from 'react'


const EmployeePaymentSlipComponent = (props) => {
    const {payPeriod, employeeName, grossIncome, incomeTax, netIncome, superAnnuation} = props;

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


EmployeePaymentSlipComponent.propTypes = {
    payPeriod: PropTypes.string.isRequired,
    employeeName: PropTypes.string.isRequired,
    grossIncome: PropTypes.number.isRequired,
    incomeTax: PropTypes.number.isRequired,
    netIncome: PropTypes.number.isRequired,
    superAnnuation: PropTypes.number.isRequired,
}


export default EmployeePaymentSlipComponent;