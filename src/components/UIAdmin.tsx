import React , { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/FormAdmin.css' ;
import { Table , Button , Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";
import axios from 'axios' ;
import ListItem from './ListItem' ;
import ListMenu from './ListMenu' ;
import EditList from './EditList' ;

class UIAdmin extends Component  {
    constructor(props){
        super(props);
        this.state = {
            todoName : [
                { Name : 'GMAIL'},
                { Name : 'NAME'},
                { Name : 'ACTIVE'},
                { Name : 'Role'},
                { Name : 'STATUS'},
                { Name : 'ACTION'}
                
            ],
            todoList : [
                {
                    id : 1 ,
                    EMAIL  : 'Phamhoangnam55@gmail.com',
                    NAME   : 'Nam Pham',
                    ACTIVE : 'Active',
                    Role   : 'ADMIN',
                    STATUS : ''
                },
                {          
                    id : 2 ,
                    EMAIL  : 'Voquoctrung1011@gmail.com',
                    NAME   : 'Trung Vo',
                    ACTIVE : 'Active',
                    Role   : 'DEVELOPER',
                    STATUS : ''
                },
                {
                    id : 3 ,
                    EMAIL  : 'Tranquoctrung@gmail.com',
                    NAME   : 'Trung Tran',
                    ACTIVE : 'Off',
                    Role   : 'DEVELOPER',
                    STATUS : ''
                },
                {
                    id : 4 ,
                    EMAIL  : 'khactien@gmail.com',
                    NAME   : 'Ngô Khắc Tiến',
                    ACTIVE : 'Off',
                    Role   : 'DEVELOPER',
                    STATUS : ''
                }
            ] ,
            modalDelete : false ,
            valueDelete : null ,
            modalEdit : false ,
            dataUpdate : null ,
            valueEdit : null ,
            changeItem : null
        } 
    }

    componentDidMount(){
        const { todoList } = this.state;
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    onchangeActive = ( value) => { 
        const { todoList } = this.state;
        const index =  todoList.indexOf(value);
            if( value.ACTIVE === 'Off'){
                this.setState({
                    todoList :
                        [
                            ...todoList.slice(0,index),
                            {
                                ...value,
                                ACTIVE : 'Active',
                            },
                            ...todoList.slice(index + 1),
                        ]       
                });
            }
            else if ( value.ACTIVE === 'Active') {
                this.setState({
                    todoList :
                        [
                            ...todoList.slice(0,index),
                            {
                                ...value,
                                ACTIVE : 'Off',
                            },
                            ...todoList.slice(index + 1),
                        ]       
                });
            }   
    }

    onchangeRole = (value) => {
        const { todoList } = this.state;
        const index =  todoList.indexOf(value);
            if( value.Role === 'DEVELOPER'){
                this.setState({
                    todoList :
                        [
                            ...todoList.slice(0,index),
                            {
                                ...value,
                                Role : 'ADMIN',
                            },
                            ...todoList.slice(index + 1),
                        ]       
                });
            }
            else if ( value.Role === 'ADMIN') {
                this.setState({
                    todoList :
                        [
                            ...todoList.slice(0,index),
                            {
                                ...value,
                                Role : 'DEVELOPER',
                            },
                            ...todoList.slice(index + 1),
                        ]       
                });
            }   
    }
   // edit 
    onchangeEdit = (value) =>{
        this.setState ({
            dataUpdate : value ,
            modalEdit : !this.state.modalEdit
        });
    }
     //vị trí
     EditIndex  = (value) =>{
        const { todoList  } = this.state ;
        const index = todoList.indexOf(value);
        this.setState({
            valueEdit : index 
        });
    }
    //đổ dữ liệu khi sửa ra ngoài 
    onSubmit = (data) => { 
        const { todoList } = this.state;
        const index = this.state.valueEdit;
        todoList[index] =data ;
        this.setState({
            todoList : todoList ,
            modalEdit : data.modalEdit
        });
        this.onchangeEdit();
    }
   
    // cancel
    onCancel = () =>{
        this.onchangeEdit();
    }
    //delete
    onchangeDelete = () =>{
        this.setState ({
            modalDelete : !this.state.modalDelete
        });
        console.log(this.state.valueDelete)
    }
    DeleteIndex = (value) =>{
        const { todoList  } = this.state ;
        const index = todoList.indexOf(value);
        this.setState({
            valueDelete : index 
        });
    }

    Yesdelete = () =>{
        const { todoList  } = this.state ;
        const index = this.state.valueDelete ;
        todoList.splice(index , 1);
        this.setState({
            todoList : todoList ,
            modalDelete : !this.state.modalDelete 
        });
    }

    render() {
        const { todoList , todoName , modalDelete ,modalEdit } = this.state;
        return (
            <>
                <div className = "body">
                    <div className = "content">
                        <Table >
                            <thead>
                                <tr>
                                    <ListMenu todoName = { todoName }   />
                                </tr>
                            </thead>
                            <tbody>
                                <ListItem 
                                    todoList = { todoList } 
                                    onchangeActive = { this.onchangeActive} 
                                    onchangeRole = {this.onchangeRole} 
                                    onchangeDelete = {this.onchangeDelete}
                                    DeleteIndex = {this.DeleteIndex}
                                    onchangeEdit = {this.onchangeEdit}
                                    EditIndex = {this.EditIndex}
                                />
                            </tbody>
                        </Table>
                    </div> 
                </div>
             {/* edit */}
                    <Modal className ="form  form-size" isOpen={modalEdit} toggle={this.onchangeEdit}   >
                            <ModalHeader  toggle={this.onchangeEdit}>Are you sure you can edit ?</ModalHeader>
                            <ModalBody >
                                <EditList 
                                    onchangeUpdate = {this.state.dataUpdate }
                                    onSubmit = { this.onSubmit }
                                    onCancel = {this.onCancel}
                                /> 
                            </ModalBody>        
                    </Modal>
                {/* delete */}
                <Modal className ="form " isOpen={modalDelete} toggle={this.onchangeDelete} >
                    <ModalHeader toggle={this.onchangeDelete}>Are you sure delete this task?</ModalHeader>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onchangeDelete}>No</Button>
                        <Button color="secondary" onClick={this.Yesdelete}>Yes</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default UIAdmin;