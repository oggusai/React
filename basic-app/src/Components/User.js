import React, { Component } from 'react'

export class User extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[{}]
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("static getDerivedStateFromProps")
    }
    async getUserdata(){
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        const data= await response.json();
        console.log(data);
        this.setState({users:data},function(){
            console.log(this.setState.users);
        })
    }
    componentDidMount(){
        console.log("component Did Mount")
        this.getUserdata();
    }

  render() {
      console.log("render Executed")
    return (
      <div>
          <h2>User Data Component</h2>
          <table className='table table-striped table-hover'>

              <tr>
              <th>id</th>
              <th>name</th>
              <th>userName</th>
              <th>Email</th>
              </tr>
              {
                  this.state.users.map((user)=>(
                      <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>

                          <td>{user.username}</td>

                          <td>{user.email}</td>

                      </tr>
                  ))
              }

          </table>

      </div>
    )
  }
}

export default User