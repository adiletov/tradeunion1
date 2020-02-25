import React, {Component} from 'react';
import {connect} from "react-redux";
import {deletePublications, getPublicationsId} from "../../Store/Actions/actionCategory";
import {NavLink} from "react-router-dom";
import './CategoryInfo.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';


class CategoryInfo extends Component {
    getPublicationsId = () => {
        const id = this.props.match.params.id;
        this.props.getPublicationsId(id)
    };

    componentDidMount() {
        this.getPublicationsId()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getPublicationsId()
        }
    }
    deletePublications = async (id)=>{
       await this.props.deletePublications(id);
        this.getPublicationsId()
    };

    render() {
        return (
            <div className="sectionPublications">
                {this.props.publications && this.props.publications.map(key =>
                    <div key={key.id} className="sectionsInfo">
                        <button onClick={()=>this.deletePublications(key.id)}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </button>
                        <NavLink to={`/manager/:id`}>{key.heading.substr(0,30)}...</NavLink>
                    </div>)}
            </div>

        );
    }
}

const mapStateToProps = state => ({
    publications: state.reducerCategory.categoryIdInfo
});

const mapDispatchToProps = dispatch => ({
    getPublicationsId: (id) => dispatch(getPublicationsId(id)),
    deletePublications: (id)=> dispatch(deletePublications(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryInfo);