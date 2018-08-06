import React from 'react'
import _ from 'lodash'
import {View, Text, ListView} from 'react-native'
import {connect} from 'react-redux'
import {employeesFetch} from './actions'
import ListItem from './ListItem'
import {Card} from "./common";

class EmployeeList extends React.Component {

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee}/>
    }

    render() {
        return (
            <Card>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);