import React from "react";

import EmployeeFormContainer from "../modules/employeeForm/containers/EmployeeFormContainer"
import EmployeePaymentSlipContainer from "../modules/employeePaySlip/containers/EmployeePaymentSlipContainer"

import styles from './styles/home.scss'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`page-home ${styles.pageHome}`}>
                <EmployeeFormContainer />
                <EmployeePaymentSlipContainer />
            </div>
        );
    }
}
