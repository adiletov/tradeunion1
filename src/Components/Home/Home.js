import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllPublications} from "../../Store/Actions/ActionOrder";
import Card from "../Card/Card";


class Home extends Component {
    componentDidMount() {
        this.props.getAllPublications();
    }

    render() {
        this.props.publications && console.log(this.props.publications);
        return (
            <div>
                {this.props.content === "Главная" ? <h3 className="heading">Новости и события</h3> : <h3>Жанылыктар</h3>}
                <Card
                publications={this.props.publications.reverse()}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
   content: state.reducerContent.content.header.home,
   publications: state.reducerPublications.allPublications
});
const mapDispatchToProps = dispatch => ({
   getAllPublications: ()=> dispatch(getAllPublications())
});
export default connect(mapStateToProps, mapDispatchToProps) (Home);