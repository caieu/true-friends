import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';

import UserHeader from '../UserHeader/UserHeader';

import './TextPost.css';

const TextPost = ({ title, text, user }) => {
  return (
    <Card className="post-card">
      <Card.Header>
        <UserHeader name={user ? user.name : ''}></UserHeader>
      </Card.Header>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text>{text}</Card.Text>}
        {!text && <Card.Text>No text</Card.Text>}
      </Card.Body>
    </Card>
  );
};

UserHeader.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.object
};

export default TextPost;
