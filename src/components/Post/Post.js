import React from 'react';
import './Post.scss';
import { Card } from 'react-bootstrap';

const Post = ({ title, text }) => {
  return (
    <Card className="post-card">
      <Card.Body>
        <Card.Title>{title ? title : 'Esse post não tem título'}</Card.Title>
        <Card.Text>{text ? text : ''}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
