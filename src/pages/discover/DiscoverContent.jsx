import React from "react";
import {
  Card,
  CardBody,
  CardImg,
} from "reactstrap";
import './Discover.scss'

const DiscoverContent = ({ image, title }) => {
  return (
    <div className="discover-container">
    <div className="discover-content">
    <Card>
      <CardBody className="discover-card">
      <CardImg top src={image} alt={title} className="title" />
    
      </CardBody>
    </Card>
    </div>
    </div>
  )
}

export default DiscoverContent;