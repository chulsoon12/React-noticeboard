import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer =[
  {
    'id':1 ,
    'image': 'https://placeimg.com/64/64/any1',
    'name': '제이슨',
    'birthday': '920908',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id':2 ,
    'image': 'https://placeimg.com/64/64/any2',
    'name': '패트릭',
    'birthday': '251102',
    'gender': '남자',
    'job': '고등학생'
  },
  {
    'id':3 ,
    'image': 'https://placeimg.com/64/64/any3',
    'name': '무스',
    'birthday': '970602',
    'gender': '남자',
    'job': '취준생'
  }
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return(
            <Customer
              key = {c.id}
              id ={c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
            );
          })
        }        
      </div>
    );
  }  
}

export default App;
