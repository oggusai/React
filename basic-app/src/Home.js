import React from 'react';
import styles from './Homestyles.module.css';



function Home() {
  // console.log(props.studentMarks)
  //   const [social,science,english,maths] =props.studentMarks;
  //   console.log(social);

    
  return (
    <div>
      <div>



        <h1 className='clr-blue'>WELCOME TO HOME PAGE</h1>


        <h2 className={styles.items}>Thanks</h2>
        
      </div>

       {    /*<h3>My Name is {props.name} and my age is {props.age}</h3>
    
        <h2>Marks: {props.studentMarks[1]} </h2>
        <h2> Marks for social: {props.studentMarks.social}</h2>

      React.createElement('h2',null,'this is without jsx'); */}


    </div>
  )
}

export default Home