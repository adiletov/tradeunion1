import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {requestPublication} from "../../Store/Actions/ActionOrder";
import {getPublicationsId} from "../../Store/Actions/actionCategory";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class FormPost extends Component {
    state={
        heading: '',
        description: '',
        image: '',
        category: this.props.match.params.id,
        editorState: EditorState.createEmpty()
    };
    inputHandler = e => {
        this.setState({[e.target.name] : e.target.value})
    };

    fileChangeHandler = e => {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    };

    addNewPost = (event) =>{
        event.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.requestPublication(formData);
        this.setState({heading: '', description: '', image: '', category: this.props.match.params.id});
    };


    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render() {

        console.log(this.state.editorState);
        return (
            <div>
                {/*<h4>{this.props.content.header[this.props.match.params.id]}</h4>*/}
                {/*<Form>*/}
                {/*    <FormGroup row>*/}
                {/*        <Label for="heading" sm={2}>Заголовок</Label>*/}
                {/*        <Col sm={10}>*/}
                {/*            <Input type="text" name="heading" id="heading"*/}
                {/*                   placeholder="Введите заголовок"*/}
                {/*                   value={this.state.heading}*/}
                {/*                   onChange={this.inputHandler}*/}
                {/*            />*/}
                {/*        </Col>*/}
                {/*    </FormGroup>*/}
                {/*    <FormGroup row>*/}
                {/*        <Label for="description" sm={2}>Описание</Label>*/}
                {/*        <Col sm={10}>*/}
                {/*            <Input type="textarea" name="description" id="description"*/}
                {/*                   placeholder="Введите описание"*/}
                {/*                   value={this.state.description}*/}
                {/*                   onChange={this.inputHandler}*/}
                {/*            />*/}
                {/*        </Col>*/}
                {/*    </FormGroup>*/}
                {/*    <FormGroup row>*/}
                {/*        <Label for="description" sm={2}>Главная картинка</Label>*/}
                {/*        <Col sm={10}>*/}
                {/*            <Input type="file"  id="image"*/}
                {/*                   multiple name="image"*/}
                {/*                   accept="image/*,image/jpeg"*/}
                {/*            onChange={this.fileChangeHandler}*/}
                {/*            />*/}
                {/*        </Col>*/}
                {/*    </FormGroup>*/}
                {/*    <Button color="primary" onClick={this.addNewPost} size="lg" block>Добавить</Button>*/}
                {/*</Form>*/}
                {/*<Editor*/}
                {/*    wrapperClassName="wrapper-class"*/}
                {/*    editorClassName="editor-class"*/}
                {/*    toolbarClassName="toolbar-class"*/}
                {/*    wrapperStyle={<wrapperStyleObject/>}*/}
                {/*    editorStyle={<editorStyleObject/>}*/}
                {/*    toolbarStyle={<toolbarStyleObject/>}*/}
                {/*                />*/}
            </div>
        );
    }
}

const mapStateToProps = state => ({
   content : state.reducerContent.content
});
const mapDispatchToProps= dispatch=> ({
    requestPublication: (file, id)=> dispatch(requestPublication(file, id)),
    getPublicationsId: (id)=> dispatch(getPublicationsId(id))
});

export default  connect(mapStateToProps, mapDispatchToProps)(FormPost);