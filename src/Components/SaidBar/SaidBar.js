import React, {Component} from 'react';
import {connect} from "react-redux";
import style from './SaidBar.module.css';
import {getCategories} from "../../Store/Actions/actionCategory";
import {NavLink} from "react-router-dom";

class SaidBar extends Component {
    componentDidMount() {
        this.props.getCategories();
    }
    render() {
        return (
            <div>
                {Object.keys(this.props.saidBar).map(key =>
                    <div key={key}>
                        {key==='president' ? <div className={style.items} key={key.id}>
                            <h4>{this.props.saidBar[key].heading}</h4>
                            <img src={this.props.saidBar[key].contents} alt=""/>
                        </div> :
                            <div className={style.items} key={key.heading}>
                                <h4>{this.props.saidBar[key].heading}</h4>
                                <div className={style.sections}>
                                    {key === 'sections' && this.props.categories ?
                                        this.props.categories.map(key=> <NavLink key={key.id} to={'/' + key.id}>{key.name}</NavLink>): null
                                    }
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
        );
    }
}


const mapStateToProps = state =>({
    saidBar : state.reducerContent.content.saidBar,
    categories: state.reducerCategory.categories
});

const mapDispatchToProps = dispatch=>({
    getCategories: ()=> dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(SaidBar);