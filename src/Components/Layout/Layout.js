import React from 'react';
import Header from "../Header/Header";
import SaidBar from "../SaidBar/SaidBar";
import './Layout.css';
import {Route, Switch} from "react-router-dom";
import Page from "../Page/Page";
import {connect} from "react-redux";
import Home from "../Home/Home";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/:id" component={Page}/>
                    </Switch>
                </div>
                <div className="said-bar">
                    <SaidBar/>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    content: state.reducerContent.content.header,
});
export default connect(mapStateToProps, null) (Layout);