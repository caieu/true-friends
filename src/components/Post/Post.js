import React from 'react';
import './Post.scss';
import { Card } from 'react-bootstrap';

const Post = ({ title, text }) => {
  return (
    <Card className="post-card">
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text>{text}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Post;
