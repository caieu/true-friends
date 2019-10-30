import React from 'react';
import './Post.scss';
import { Card } from 'react-bootstrap';

const Post = ({ title, text }) => {
  return (
    <Card className="post-card">
      <Card.Body>
        <Card.Title>
          {title ? title : 'This post do not have a title.'}
        </Card.Title>
        <Card.Text>{text ? text : ''}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
