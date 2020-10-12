import Reac , { Component } from 'react' ;
import { Table ,Button  } from "reactstrap";
class ListMenu extends Component {
    render(){
        const { todoName  } = this.props ;
        let List_Menu = todoName.map((item , index) =>{
            return (    <th  key = { index } >
                                { item.Name }
                        </th> 
            ) ;
        });

        return (    <>   
                        { List_Menu }
                    </>
        );
    }
}
export default ListMenu ;