import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployCreate from './EmployeeCreate';
import {Spinner} from "./common";
import EmployeeEdit from './EmployeeEdit';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene
                        key = 'login'
                        component = {LoginForm}
                        title = 'Login'
                        initial
                    />
                </Scene>

                <Scene key='main'>
                    <Scene
                        key='employeeList'
                        component={EmployeeList}
                        title='Employees'
                        rightTitle = 'Add'
                        onRight = {() => Actions.employeeCreate()}
                        initial
                    />

                    <Scene
                        key = 'employeeCreate'
                        component = {EmployCreate}
                        title = 'Employee'
                    />

                    <Scene
                        key = 'employeeEdit'
                        component = {EmployeeEdit}
                        title = 'Edit'
                    />
                </Scene>
            </Scene>
        </Router>
    );
};


export default RouterComponent;


/*
<Scene key='root' hideNavBar>
    <Scene key='auth'>
        <Scene
            key = 'login'
            component = {LoginForm}
            title = 'Login'
        />
    </Scene>

    <Scene key='main'>
        <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employees'
            rightTitle = 'Add'
            onRight = {() => Actions.employeeCreate()}
            initial
        />

        <Scene
            key = 'employeeCreate'
            component = {EmployCreate}
            title = 'Employee'
        />
    </Scene>
</Scene>
*/