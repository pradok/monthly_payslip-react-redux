import React from 'react'
import assert from "assert"
import sinon from "sinon"
import {shallow} from 'enzyme'

import EmployeeFormComponent from "../../../../src/modules/employeeForm/components/EmployeeFormComponent"

const setup = employeeFormProps => {

    const actions = {
        onEmployeeDetailsHandler: sinon.spy()
    }

    const component = shallow(
        <EmployeeFormComponent {...employeeFormProps} {...actions}  />
    )

    return {
        component: component,
        button: component.find('input[type="submit"]')
    }
}

let EmployeeFormProps;

describe('EmployeeFormComponent component', () => {
    beforeEach(() => {
        EmployeeFormProps = {
            layoutChoice: 'horizontal',
            validateOnSubmitChoice: false,
            validatePristineChoice: false,
            disabledChoice: false
        }
    })
    describe('render()', () => {
        it('should render the Employee Form', () => {
            const { component } = setup(EmployeeFormProps);
            assert.equal(component.length, 1);
        });
        it('should render the submit button', () => {
            const { button } = setup(EmployeeFormProps);
            assert.equal(button.length, 1);
        })
    });


});