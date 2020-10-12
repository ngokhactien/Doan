import 'bootstrap/dist/css/bootstrap.min.css';
import React , { Component }  from 'react';
import '../assets/styles/FormAdmin.css' ;
import { Table  } from "reactstrap";

import { Modal, Button ,Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import ListItem from './ListItem' ;
import ListMenu from './ListMenu' ;
import EditList from './EditList' ;

class UIAdmin_test extends Component  {
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
                    EMAIL  : 'Phamhoangnam55@gmail.com',
                    NAME   : 'Nam Pham',
                    ACTIVE : 'Active',
                    Role   : 'ADMIN',
                    STATUS : '',
                },
                {          
                    EMAIL  : 'Voquoctrung1011@gmail.com',
                    NAME   : 'Trung Vo',
                    ACTIVE : 'Active',
                    Role   : 'DEVELOPER',
                    STATUS : '',
                },
                {
                    EMAIL  : 'Tranquoctrung@gmail.com',
                    NAME   : 'Trung Tran',
                    ACTIVE : 'Off',
                    Role   : 'DEVELOPER',
                    STATUS : '',
                },
                {
                    EMAIL  : 'khactien@gmail.com',
                    NAME   : 'Ngô Khắc Tiến',
                    ACTIVE : 'Off',
                    Role   : 'DEVELOPER',
                    STATUS : '',
                }
            ] ,
            visibleEdit : false ,
            visibleDelete : false ,
            confirmLoading: false ,
        }
        
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
    //edit
    showConfirmEdit = () => {
        this.setState({
            visibleEdit: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visibleEdit: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visibleEdit: false,
        });
    };
    //delete
    showConfirmDelete = (test) => {
        this.setState({
        visibleDelete: true,
        });
        this.showDelete(test);
    };
    
    handleOkDelete = (event) => {
        this.setState({
        confirmLoading: true,
        });
        setTimeout(() => {
        this.setState({
            visibleDelete: false,
            confirmLoading: false
        });
        }, 2000);
        console.log(event,1);
    }
    
    handleCancelDelete = () => {    
        this.setState({
            visibleDelete: false
        });
    };

    showDelete = ( test ) =>{
        const { todoList } = this.state;
        const index =  todoList.indexOf(test);
        
        // todoList.splice(index ,1 )  ;
        // this.setState({
        //     todoList : todoList
        // });     
        
    }
    render() {
        const { todoList ,todoName ,visibleEdit, confirmLoading , visibleDelete } = this.state;
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
                                    showConfirmEdit = {this.showConfirmEdit}
                                    showConfirmDelete = { this.showConfirmDelete  }
                                    showDelete = { this.showDelete }
                                />
                            </tbody>
                        </Table>
                    {/* Edit */}
                        <Modal
                            title="Do you want to edit ? "
                            visible={ visibleEdit }
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            width={1000}    
                        >
                            <EditList 
                                />
                        </Modal>
                    {/* delete */}
                        <Modal
                            // title="Do you Want to delete these items?"
                            visible={ visibleDelete }
                            onOk={this.handleOkDelete }
                            confirmLoading={ confirmLoading }
                            onCancel={this.handleCancelDelete }
                            >
                            <p>Are you sure delete this task?</p>
                        </Modal>
                    </div>
                </div>
                
            </>
        );
    }
}

export default UIAdmin_test;