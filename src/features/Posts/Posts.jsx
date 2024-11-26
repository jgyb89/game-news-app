import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from 'reactstrap';
import './Posts.scss'; // SCSS file for styling
import Share from '../../assets/arrow-send-white.svg'

const Post = ({ image, title, username, description, profile }) => {
  return (
    <Card className="post">
      <div className='user-details'>
        <div>
        <img src={profile} />
      </div>
      <div>
      <CardTitle tag="h5">{username}</CardTitle>
      <p>{title}</p>
      </div>
      </div>
      <CardImg top src={image} alt={title} className="post-image" />
      <CardBody>
        <div className="post-actions">
          <div className="post-interact">
          <Button size="sm"><i class="fa-regular fa-heart"></i></Button>
          <Button size="sm"><i class="fa-regular fa-comment"></i></Button>
          <Button size="sm"><img src={Share} alt="share" /></Button>
          </div>
          <div className="post-save">
          <Button size="sm"><i class="fa-regular fa-bookmark"></i></Button>
          </div>
        </div>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default Post;