import React , { Component }  from 'react';
// import 'src/assets/styles/Admin.css';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';



class UIAdmin extends Component  {
    constructor(props){
        super(props);
        this.state = { 
            visible: false,
            name : 'nguyen'
        };
    }
    onchen = () => {
        // this.setState({
        //     name : 'tieen'
        // });
        console.log('helo');
    }
    render() {
        const { confirm } = Modal;
        function showDeleteConfirm() {
            confirm({
                title: 'Are you sure delete this task?',
                icon: <ExclamationCircleOutlined />,
                content: 'Some descriptions',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    console.log();
                    this.onchen();
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        return (
            <>
                <Button onClick={showDeleteConfirm} type="dashed">
                    Delete
                </Button>
            </>
        );
    }
    
}

export default UIAdmin;