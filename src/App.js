import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer ={
  'name': '제이슨',
  'birthday': '920908',
  'gender': '남자',
  'job': '대학생'
}


class App extends Component {
  render() {
    return (
     <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
      />
      
    );
  }  
}

export default App;
