import React from "react";

import {Carousel,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class extends React.Component  {
  
    render(){

      const {interval,datasource, width}=this.props;
      console.log(interval)

    return (

        <div>
<Carousel controls={true} indicators={false}>
  {datasource.map(function(item, i){
    return (
      <Carousel.Item interval={interval}>
      <img
        className="d-block w-100"
        src={item.img}
        alt="First slide"
        style={{height:width}}
       
      />
      <Carousel.Caption>
     {/* <Button variant="outline-primary">Primary</Button>{' '} */}
      </Carousel.Caption>
    </Carousel.Item>
      )
  })  
  }
 

</Carousel>
        </div>

    )};

}