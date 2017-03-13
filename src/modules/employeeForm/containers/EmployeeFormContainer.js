import React from 'react'
import {connect} from 'react-redux'
import EmployeeFormComponent from '../components/EmployeeFormComponent'

export class EmployeeFormContainer extends React.Component {
    constructor(props) {
        super(props);
        // Default state for EmployeeFormComponent
        this.state = {
            layout: 'horizontal',
            validateOnSubmit: false,
            validatePristine: false,
            disabled: false
        };

        this.onEmployeeDetailsHandler = this.onEmployeeDetailsHandler.bind(this);
    }

    onEmployeeDetailsHandler(formData) {
        this.props.dispatch({
            type: 'EMPLOYEE_DETAILS',
            employeeDetails: formData,
        });
    }

    render() {
        return (
            <EmployeeFormComponent
                onEmployeeDetailsHandler={this.onEmployeeDetailsHandler}
                layoutChoice={this.state.layout}
                validateOnSubmitChoice={this.state.validateOnSubmit}
                validatePristineChoice={this.state.validatePristine}
                disabledChoice={this.state.disabled}
            />
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(EmployeeFormContainer)