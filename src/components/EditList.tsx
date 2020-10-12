import Reac , { Component } from 'react' ;
import { Table ,Button  } from "reactstrap";
import '../assets/styles/FormAdmin.css' ;


class EditList extends Component {
    render(){

        return ( 
            <Table >
                <tr>
                    <th>
                        GMAIL
                    </th> 
                    <th>
                        NAME
                    </th> 
                    <th>
                        ACTIVE
                    </th>
                    <th>
                        Role
                    </th>
                    <th>
                        STATUS
                    </th>
                </tr>
                <tr>   
                    <th>Phamhoangnam55@gmail.com</th>
                    <td>Nam Pham</td>
                    <td>
                        <Button  className = "width-active" size="sm" outline color= 'primary' > 
                                ACTIVE
                        </Button>
                    </td>
                    <td>
                        <Button    className = "width-role" size="sm" color= 'primary'>
                        ADMIN
                        </Button>
                    </td>
                    <th> 
                        <p>hello</p>   
                    </th>
                    
                </tr>
            </Table>
        );
    }
}
export default EditList ;