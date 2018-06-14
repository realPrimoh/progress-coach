import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input   } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Progress Coach</h1>
        </header>
        <div className="Goal-Box">
        <Form>
            <FormGroup>
                <Label for="Goal">I want to...</Label>
                <Input type="text" name="Goal" id="goal-text" placeholder="What's your goal?" />
            </FormGroup>
        <FormGroup>
            <Label for="goal-date">by...</Label>
            <Input type="date" name="Goal-Date" id="goal-date" />
        </FormGroup>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        
            
                
        
        <Button color="danger">Set your goal</Button>
        </Form>
        </div>
      </div>
    );
  }
}

export default App;
