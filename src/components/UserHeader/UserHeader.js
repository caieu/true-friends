import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Image } from 'react-bootstrap';

import userPlaceholder from '../../assets/images/user-placeholder.jpg';

import './UserHeader.css';

const UserHeader = ({ name }) => {
  return (
    <div className="user-header-container">
      <Row>
        <Col>
          <Image src={userPlaceholder} roundedCircle />
          <span className="user-name">{name ? name : 'No user name'}</span>
        </Col>
      </Row>
    </div>
  );
};

UserHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserHeader;
