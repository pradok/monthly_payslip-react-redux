import React from 'react'
import {connect} from 'react-redux'
import {Modal, Button} from "react-bootstrap";

import EmployeePaymentSlipComponent from '../components/EmployeePaymentSlipComponent';

class EmployeePaymentSlipContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal(){
        this.setState({showModal: false});
    }

    openModal(){
        this.setState({showModal: true});
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps:', nextProps);
        if(Object.keys(nextProps.employeePaySlip).length == 0) {
            this.setState({showModal: false});
        }
        else {
            this.setState({showModal: true});
        }
    }

    render() {
        console.log('this.props:', this.props);
        return (
            <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Pay Slip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmployeePaymentSlipComponent {...this.props.employeePaySlip} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    employeePaySlip: state.employeePay || {}
})

export default connect(mapStateToProps)(EmployeePaymentSlipContainer);