
import React, { Component } from 'react'

export class ListsAndKeys extends Component () {
    employeelist=[
        {
            name:'virat',
            id:1,
            age:33
        },  {
            name:'rohit',
            id:2,
            age:32
        },  {
            name:'dhawan',
            id:3,
            age:30
        },  {
            name:'Dhoni',
            id:4,
            age:38
        },  {
            name:'bhuvi',
            id:5,
            age:28
        }

    ]

    EmployeeList=this.EmployeeDetails.map(employee=>(
        <Employee key={employee.id} name={employee.name}  age={employee.age} />

    ))


    render (){

  return (
    <div>
        <h2>{this.EmployeeList}</h2>


    </div>
  )
}
}
const Employee = props =>{
    return(
        <div>
            <h2>Name : {props.name} and age : {props.age}</h2>
        </div>
    )
}

export default ListsAndKeys