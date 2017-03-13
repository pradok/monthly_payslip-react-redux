import moment from 'moment';

const employeePay = (state = {}, action) => {
    switch (action.type) {
        case 'EMPLOYEE_DETAILS_CALCULATE_PAY':
            //console.log('EMPLOYEE_DETAILS_CALCULATE_PAY action', action);
            return paymentSlipGenerate(action.employeeDetails)
        default:
            return state
    }
}

export default employeePay

export const paymentSlipGenerate = (employeeDetails) => {

    const {annualSalary, taxableIncome, paymentStartDate, superAnnuation, firstName, lastName} = employeeDetails;

    let grossIncomeMonth = annualSalary >= 0 ? calculateGrossIncomeMonth(annualSalary, paymentStartDate) : '';
    let incomeTaxBracket = taxableIncome ? findEmployeeIncomeBracket(taxableIncome, annualSalary) : '';
    let incomeTaxMonth = incomeTaxBracket ? calculateMonthIncomeTax(incomeTaxBracket, annualSalary, paymentStartDate) : 0;
    let netIncomeMonth = grossIncomeMonth - incomeTaxMonth;
    let superMonth = superAnnuation >= 0 ? Math.round(grossIncomeMonth * superAnnuation / 100) : '';

    return {
        payPeriod: `${moment(paymentStartDate).format('DD MMMM')} - ${moment(paymentStartDate).endOf('month').format('D MMMM')}`,
        employeeName: `${firstName} ${lastName}`,
        grossIncome: grossIncomeMonth,
        incomeTax: incomeTaxMonth,
        netIncome: netIncomeMonth,
        superAnnuation: superMonth
    }
}

export const findEmployeeIncomeBracket = (taxableIncome, annualSalary) => {
    return taxableIncome.find(incomeBracket => {
        return (
            // If annual salary is at the highest and there is no max value set.
            ((incomeBracket.min >= 0 && !incomeBracket.max) && annualSalary >= incomeBracket.min)
            || ((incomeBracket.min >= 0 && incomeBracket.max >= 0) && (annualSalary >= incomeBracket.min && annualSalary <= incomeBracket.max))
        )
    });
}

// Calculate gross pay for the days in the month of payment start date.
export const calculateGrossIncomeMonth = (annualSalary, paymentStartDate) => {

    // Full no. of days in the month of given
    let daysInMonth = moment(paymentStartDate).daysInMonth();
    let grossIncomeMonth = Math.round(annualSalary / 12);

    let remainingDays = remainingDaysinPaymentMonth(paymentStartDate);

    // If beginning of month selected (full month).
    if (daysInMonth == remainingDays) {
        return grossIncomeMonth;
    }
    else {
        let payPerDay = Math.round(grossIncomeMonth / daysInMonth);
        // Gross Income for the remaining days in the month.
        let grossIncomeRemainingDays;
        grossIncomeRemainingDays = payPerDay * remainingDays;
        return grossIncomeRemainingDays;
    }

}

// Calculate Tax for the days in the month, full month or the remaining days if not begin date in paymentStartDate given.
export const calculateMonthIncomeTax = (taxableIncome, annualSalary, paymentStartDate) => {
    let daysInMonth = moment(paymentStartDate).daysInMonth();
    let remainingDays = remainingDaysinPaymentMonth(paymentStartDate);

    // Income tax for the full month.
    let incomeTax = Math.round((taxableIncome.amount + (annualSalary - taxableIncome.over) * taxableIncome.percent / 100) / 12);

    // If beginning of month selected (full month).
    if (daysInMonth == remainingDays) {
        return incomeTax;
    }
    else {
        let taxPerDay = Math.round(incomeTax / daysInMonth);
        // Income Tax for the remaining days in the month if not for full month.
        let taxRemainingDays;
        taxRemainingDays = taxPerDay * remainingDays;
        return taxRemainingDays;
    }

}
// Get the remaining days in the month of payment start date.
//@todo Need to get weekdays for more accurate monthly pay calculation, this includes weekend days.
export const remainingDaysinPaymentMonth = (paymentStartDate = '') => {
    // End of month from the payment start date.
    let endOfMonth = moment(paymentStartDate).endOf('month');
    let startDate = moment(paymentStartDate);
    // Remaining days in the payment start date month.
    let remainingDaysMonth = endOfMonth.diff(startDate, 'days') + 1;
    return remainingDaysMonth;
}
