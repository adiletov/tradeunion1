import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {changeLanguageKg, changeLanguageRu} from "../../Store/Actions/actionContent";
import './Header.css';
import logotype from '../../Assets/Images/logotype.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <Fragment>
            <div className="header">
                <div>{props.date}</div>
                <div  className="btnLanguage">
                    <button onClick={props.changeLanguageRu}>Ru</button>
                    <button onClick={props.changeLanguageKg}>Kg</button>
                    <NavLink to="/manager">Manager</NavLink>
                </div>
            </div>
            <div className="logotypeBlock">
                <img className="logotypeImg" src={logotype} alt=""/>
                <h1 className="logotypeTxt">{props.logotype.txt}</h1>
                <span className="logotypeSubTxt">{props.logotype.subTxt}</span>
            </div>
            <div className="header">
                {Object.keys(props.content).map(key=>
                    {if (key === 'home') {
                        return  <NavLink key={props.content[key]}
                                    exact to="/" activeStyle={{color: 'white'}}>
                                    {props.content[key]}
                                </NavLink>
                    }else{
                       return <NavLink key={props.content[key]}
                                    exact to={`/${key}`} activeStyle={{color: 'white'}}>
                                    {props.content[key]}
                              </NavLink>
                    }}
                )}
            </div>
        </Fragment>

    );
};


const mapStateToProps = state => ({
    content: state.reducerContent.content.header,
    logotype: state.reducerContent.content.logotype,
    date: state.reducerContent.content.date
});
const mapDispatchToProps = dispatch => ({
    changeLanguageKg: ()=> dispatch(changeLanguageKg()),
    changeLanguageRu: ()=> dispatch(changeLanguageRu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

