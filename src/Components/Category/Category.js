import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {connect} from "react-redux";
import {addCategory, getCategories} from "../../Store/Actions/actionCategory";
import {NavLink} from "react-router-dom";
import {Collapse} from "reactstrap";


class Category extends Component {
    state = {
        name: '',
        dropdown: false
    };

    componentDidMount() {
        this.props.getCategories()
    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    clickDropdown = (boolean) => {
        this.setState({dropdown: boolean})
    };
    addNewCategory = (e) => {
        e.preventDefault();
        const category = {
            name: this.state.name
        };
        this.props.addCategory(category);
        this.setState({dropdown: false})
    };

    render() {
        return (
            <Fragment>
                {this.state.dropdown ?
                    <Button color="primary"
                            onClick={() => this.clickDropdown(false)}
                            style={{marginBottom: '1rem'}}>-</Button> :
                    <Button color="primary"
                            onClick={() => this.clickDropdown(true)}
                            style={{marginBottom: '1rem'}}>Добавить категорию
                    </Button>
                }
                <Collapse isOpen={this.state.dropdown}>
                    <Form onSubmit={this.addNewCategory}>
                        <FormGroup>
                            <InputGroup>
                                <Input type="text" name="name" id="name"
                                       placeholder="Введите название категории"
                                       onChange={this.inputChangeHandler}
                                />
                                <InputGroupAddon addonType="append"><Button>OK</Button></InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>

                </Collapse>
                <div style={{'display': 'flex',
                    'flexDirection': 'column',
                    'textAlign': 'left',
                    'padding': '10px'}}>
                    {this.props.categories && this.props.categories.map(key =>
                       <NavLink key={key.id} to={`/manager/add/${key.id}`}>{key.name}</NavLink>
                    )}
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.reducerCategory.categories
});
const mapDispatchToProps = dispatch => ({
    addCategory: (category) => dispatch(addCategory(category)),
    getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);