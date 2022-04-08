import React,{Component} from "react";
import './Homestyles.css'
import styles from './Homestyles.module.css';


class ClassComponent extends Component {
    constructor(){
        super()


        this.state={
            welcome : 'welcome to state',
            count:0
        }
    }
    changeMessage(){
        this.setstate({
            welcome:"thank you"
        })
    }
    increment(){
        this.setState({
            count: this.state.count +1
    
        })
    }
    decrement(){
        this.setState({
            count:this.state.count -1
        })
    }
    reset(){
        this.setState({
            count:0
        })
    }


    render(){
        return(
        
            <div>
                <h1 className="clr-blue" >SAIKUMAR</h1>
                <h2 className="clr-red">ClassComponent</h2>
                <div>

                    <div className={styles.items}>this.state.welcome</div>
                    <button onClick={()=>this.changeMessage()}>Click here</button>
                    



                    <h2 >Counter</h2>
                    <div className="clr-blue">Count - {this.state.count}</div>
                
                    <button onClick={()=>this.increment()}>increment</button>
                
                    <button onClick={()=>this.decrement()}>decrement</button>
                    
                    <button onClick={()=>this.reset()}>reset</button>
                </div>




            </div>
        )
    }
}

export default ClassComponent;