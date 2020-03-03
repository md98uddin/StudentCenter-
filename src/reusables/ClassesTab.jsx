import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ClassesTab = props => {
    const { main, titleBlock, title, bigBlock, biggerBlock } = styles;
    return (
      <div style={main} className="main">
          <div style = {bigBlock} className= "title">{
            <div style={titleBlock} className="title-block">
            <p style={title}>ACTIONS</p>

            <Button variant="info" size="lg" >VIEW SCHEDULE</Button>
            <p></p><br/>
            <Button variant="info" size="lg">  VIEW SHOPPING CART</Button>
            <p></p><br/>
            <Form.Control type="text" placeholder="Search Bar" />
            <Button variant="primary" type="submit">Submit</Button>
            </div>

           }</div>

          <div style={biggerBlock} className="biggerBlock">
          </div>

      </div>
    );
  };
  
  const styles = {
    main: { 
      marginLeft: "80px",
     // float: "left", 
      marginTop: 25 
    },
    titleBlock: {
      width: "35vh",
      height: "30px",
      marginLeft: "50px",
      marginTop: "20px",
      backgroundColor: "#483A3A",
      float: "left"
    },
    title: {
      color: "#F2F2F2", 
      marginLeft: "75px", 
      fontSize: 20 
    },
    bigBlock: {
      float: "left",
      width: "50vh",
      height: "500px",
      backgroundColor: "#F7E8E8",
      marginTop: "50px",
      borderRadius: "10px"
    },
    biggerBlock: {
      padding: "50 px",
      float: "left",
      width: "120vh",
      height: "600px",
      backgroundColor: "#F7E8E8",
      marginLeft: "50px",
      marginTop: "10px",
      borderRadius: "10px"
    }
  };

export default ClassesTab;