import Reac , { Component } from 'react' ;
import { Table , Button  } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class ListItem extends Component {

    onchangeActive( text) {
        this.props.onchangeActive( text) ;
    }
    onclickRole(text) {
        this.props.onchangeRole( text) ;
    }
    // delete
    onchangeDelete(value){
        this.props.DeleteIndex(value) ;
        this.props.onchangeDelete();
    }
    //edit
    onchangeEdit(value){
        this.props.onchangeEdit(value);
        this.props.EditIndex(value) ;
    }

    render(){
        const { todoList , onchangeDelete , onchangeEdit } = this.props ;
        let element = todoList.map( (item ,index) => {
            let colorActive = 'danger' ;
            let colorRole = 'danger' ;
            if(item.ACTIVE === 'Active'){
                colorActive = 'success' ;
            }
            if(item.Role === 'DEVELOPER'){
                colorRole = 'primary' ;
            }
            return (   <tr key= {index} >   
                            <th>{ item.EMAIL }</th>
                            <td>{ item.NAME }</td>
                            <td>
                                <Button onClick = { () => this.onchangeActive(item)  } className = "width-active" size="sm" outline color= {colorActive} > 
                                    {item.ACTIVE}
                                </Button>
                            </td>
                            <td>
                                <Button  onClick = { () => this.onclickRole(item)  }  className = "width-role" size="sm" color={colorRole}>
                                    {item.Role}
                                </Button>
                            </td>
                            <td>  
                                {item.STATUS}
                            </td>
                            <th>
                                <i  className ="fa fa-pencil-square-o fa-lg edit"   
                                    aria-hidden="true"
                                    onClick = { () => this.onchangeEdit(item) }
                                >
                                </i>
                                <i  className ="fa fa-trash-o fa-lg delete" 
                                    aria-hidden="true"
                                    onClick = { () => this.onchangeDelete(item) }
                                >
                                </i>
                            </th>   
                        </tr>
            ) ;
        });
        return (  
            <>
                {element}
            </>
        );
    }
}
export default ListItem ;