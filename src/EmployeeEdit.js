import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import {Button, Card, CardSection, Confirm} from "./common";
import {employeeUpdate, employeeSave, employeeDelete} from "./actions";
import EmployeeForm from './EmployeeForm'
import {View} from "react-native";

class EmployeeEdit extends React.Component {

    state = {showModal: false};

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        this.props.employeeDelete({uid: this.props.employee.uid});
    }

    onDecline() {
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        return (
            <View>
                <Card>
                    <EmployeeForm/>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save Changes
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onTextPress.bind(this)}>
                            Text
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                            Fire
                        </Button>
                    </CardSection>

                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are You sure you want to delete {this.props.name} ?
                    </Confirm>
                </Card>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift}
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);