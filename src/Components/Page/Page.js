import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import './Page.css';
import {getCategoryInfo} from "../../Store/Actions/ActionOrder";
import Card from "../Card/Card";

class Page extends Component {
    getComponent= async ()=>{
        const id = this.props.match.params.id;
       await this.props.getCategoryInfo(id);
    };
    componentDidMount() {
       this.getComponent()
    }
   componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            this.getComponent()
        }
   }

    render() {
        console.log(this.props.publications);
        return (
            <Fragment>
                {this.props.publications && Object.keys(this.props.publications).map(key =>
                <div>
                    {key === 'name' ? <h3 className="heading">{this.props.publications[key]}</h3> :
                        <Card
                            publications={this.props.publications[key].reverse()}
                        />
                }</div>)}
            </Fragment>
        );
    }
}
const mapStateTopProps = state => ({
   content: state.reducerContent.content.header,
    publications: state.reducerPublications.publications

});
const mapDispatchToProps= dispatch=>({
   getCategoryInfo: (id)=> dispatch(getCategoryInfo(id))
});
export default connect(mapStateTopProps, mapDispatchToProps) (Page);