import React from 'react'
import {connect} from 'react-redux'

import EmployeePaymentSlipComponent from '../components/EmployeePaymentSlipComponent';

class EmployeePaymentSlipContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props:', this.props);
        return (
            <EmployeePaymentSlipComponent {...this.props.employeePaySlip} />
        )
    }
}

const mapStateToProps = state => ({
    employeePaySlip: state.employeePay || {}
})

export default connect(mapStateToProps)(EmployeePaymentSlipContainer);