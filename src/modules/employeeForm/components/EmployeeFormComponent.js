import React, {PropTypes} from 'react';
import FRC from 'formsy-react-components';

import styles from '../styles/employeeForm.scss'


const {Input, Row} = FRC;

const EmployeeFormComponent = (props) => {

    const {disabledChoice, layoutChoice, validateOnSubmitChoice, validatePristineChoice, onEmployeeDetailsHandler} = props;

    let payrollForm = null;

    const resetForm = () => {
        console.log('Reset called'); // eslint-disable-line no-console
        const formsy = payrollForm.refs.formsy;
        formsy.reset();
    }

    return (
        <div className={`${styles.employeeForm}`}>
            <FRC.Form
                onValidSubmit={onEmployeeDetailsHandler}
                layout={layoutChoice}
                validateOnSubmit={validateOnSubmitChoice}
                validatePristine={validatePristineChoice}
                disabled={disabledChoice}
                ref={(form) => {
                    payrollForm = form;
                }}
            >
                <fieldset>
                    <legend>Employee Details</legend>
                    <Input
                        name="firstName"
                        value=""
                        label="First name"
                        type="text"
                        validationErrors={{
                            isDefaultRequiredValue: "Please provide your First Name"
                        }}
                        required
                    />
                    <Input
                        name="lastName"
                        value=""
                        label="Last name"
                        type="text"
                        validationErrors={{
                            isDefaultRequiredValue: "Please provide your Last Name"
                        }}
                        required
                    />
                    <Input
                        name="annualSalary"
                        value=""
                        label="Annual Salary ($)"
                        type="text"
                        validations={{
                            matchRegexp: /^\d+$/
                        }}
                        validationErrors={{
                            matchRegexp: 'Please provide your Annual Salary in positive digits',
                            isDefaultRequiredValue: "Please provide your Annual Salary"
                        }}
                        required
                    />
                    <Input
                        name="superAnnuation"
                        value=""
                        label="Super (%)"
                        type="text"
                        validations={{
                            matchRegexp: /^\d+$/
                        }}
                        validationErrors={{
                            matchRegexp: 'Please provide valid super in positive digits',
                            isDefaultRequiredValue: "Please provide your Super"
                        }}
                        required
                    />
                    <Input
                        name="paymentStartDate"
                        value=""
                        label="Payment start date"
                        type="date"
                        validationErrors={{
                            isDefaultRequiredValue: "Please provide start date"
                        }}
                        required
                    />

                </fieldset>
                <fieldset>
                    <Row layout={layoutChoice}>
                        <input className="btn btn-default" onClick={resetForm} type="reset" defaultValue="Reset"/>
                        {' '}
                        <input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Submit"/>
                    </Row>
                </fieldset>
            </FRC.Form>
        </div>
    );
}

EmployeeFormComponent.propTypes = {
    disabledChoice: PropTypes.bool.isRequired,
    layoutChoice: PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']).isRequired,
    validateOnSubmitChoice: PropTypes.bool.isRequired,
    validatePristineChoice: PropTypes.bool.isRequired,
    onEmployeeDetailsHandler: PropTypes.func.isRequired
};

export default EmployeeFormComponent;
