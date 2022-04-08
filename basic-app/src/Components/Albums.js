import React, { Component } from 'react'

export class Albums extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[{}]
        }
        console.log("constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("static getDerivedStateFromProps");

    }
    async getUserdata(){
        const response =await fetch("https://jsonplaceholder.typicode.com/comments");
        console.log(response)
        const data=await response.json();
        console.log(data);

        this.setState({users:data},function(){
            console.log(this.setState.users);
        })
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.getUserdata();
    }
  render() {
    console.log("render Executed")
    return (
      <div>
          <h2>Albums</h2>
          <table className='table table-dark'>

<tr  className='bg bg-info'>
<th>id</th>
<th>name</th>
<th>postId</th>
<th>Email</th>
</tr>
{
    this.state.users.map((user)=>(
        <tr className='bg bg-success'>
            <td className='bg bg-danger'>{user.id}</td>
            <td>{user.name}</td>

            <td className='bg bg-primary'>{user.postId}</td>

            <td className='bg bg-warning'>{user.email}</td>

        </tr>
        
    ))
}

</table>

          












      </div>
    )
  }
}

export default Albums