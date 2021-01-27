import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TalbeCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>    
          <TableHead>
            <TableRow>
              <TalbeCell>번호</TalbeCell>
              <TalbeCell>이미지</TalbeCell>
              <TalbeCell>이름</TalbeCell>
              <TalbeCell>생년월일</TalbeCell>
              <TalbeCell>성별</TalbeCell>
              <TalbeCell>직업</TalbeCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customer.map(c => {
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
          </TableBody>     
        </Table>   
      </Paper>
    );
  }  
}

export default withStyles(styles)(App);
