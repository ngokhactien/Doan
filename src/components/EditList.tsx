import React , { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput , ModalFooter } from 'reactstrap';

class EditList extends Component  {
  constructor(props){
    super(props);
    const { onchangeUpdate  } = this.props;
    this.state = {
      EMAIL : onchangeUpdate.EMAIL,
      NAME   : onchangeUpdate.NAME,
      ACTIVE : onchangeUpdate.ACTIVE,
      Role   : onchangeUpdate.Role,
      STATUS : onchangeUpdate.STATUS,
      modalEdit : true 
    }
  }
  
  onchangeItem = (event) => {
    var target = event.target;
    var name = target.name ;
    var value =   target.value ;
    this.setState({
      [name] : value 
    })
  }
  //ok
  onSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state);  // chuyền ra ngoài
  }
  //button cancel
  onCancel = () =>{
    this.props.onCancel() ;
  }

  render(){
    return (
        <Form onSubmit = {this.onSubmit} > 
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input type="email" 
                    name="EMAIL" 
                    value = {  this.state.EMAIL}
                    placeholder="Enter the Email" 
                    onChange ={ this.onchangeItem}
            />
          </FormGroup>
            
          <FormGroup>
          <Label for="Name">NAME</Label>
            <Input 
                type="name" 
                name="NAME" 
                placeholder="Enter the Name"
                value = {  this.state.NAME}
                onChange ={ this.onchangeItem}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleCheckbox">Is Actived ?</Label>
            <div className="radio">
              <label>
                <input 
                    type="radio" 
                    name ="ACTIVE" 
                    value ="Active"
                    onChange ={ this.onchangeItem}
                    checked = { this.state.ACTIVE === 'Active'}
                />
                &ensp; Active
              </label><br/>
              <label>
                <input 
                    type="radio" 
                    name ="ACTIVE" 
                    value ="Off"
                    onChange ={ this.onchangeItem} 
                    checked = { this.state.ACTIVE === 'Off' }
                />
                &ensp; Off
              </label>
              {/* <CustomInput 
                  type="switch" 
                  name="ACTIVE" 
                  label="Turn on to Active the accout" 
                  onChange ={ this.onchangeItem}
                  checked = {  this.state.ACTIVE === 'Active' ? true : false }
              /> */}
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="RoleSelect">Select Role</Label>            
            <select 
                name="Role"  
                className="form-control"
                value = {this.state.Role} 
                onChange ={ this.onchangeItem}
            >
              <option value={'ADMIN'}>Admin</option>
              <option value={'DEVELOPER'}>Developer</option>
            </select>
            
          </FormGroup>
        
          <FormGroup>
            <Label for="Status">Status</Label>
            <Input 
                type="textarea" 
                name="STATUS" 
                value = {  this.state.STATUS}
                onChange ={ this.onchangeItem}
            />
          </FormGroup>
          {/* <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Are you sure for the changing ?
            </Label>
          </FormGroup> */}
            <ModalFooter >
                <Button 
                    outline color="warning" 
                    onClick={this.onCancel}
                >Cancel</Button>
                <Button type ="submit" outline color="info" >Ok</Button>
            </ModalFooter>
        </Form>
      );
    }
}

export default EditList;