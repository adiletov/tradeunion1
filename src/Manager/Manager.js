import React, {Component} from 'react';
import {connect} from "react-redux";
import './Manager.css';

import Category from "../Components/Category/Category";
import FormPost from "./FormPost/FormPost";
import {Route, Switch} from "react-router-dom";


class Manager extends Component {
    render() {
        return (
            <div className="container managerBlock">
                <div className="saidBar">
                    <Category/>
                    <Switch>
                        <Route/>
                    </Switch>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/manager/add/:id" component={FormPost}/>
                    </Switch>
                </div>
                {/*<Login></Login>*/}

            </div>
        );
    }
}
const mapStateToProps = state => ({
   content: state.reducerContent.content
});
export default connect(mapStateToProps, null) (Manager);