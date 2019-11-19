import React from 'react';
import TextPost from './TextPost';

export default {
  title: 'TextPost'
};

let user = {
  name: 'Joseph Marcus'
};

export const withTitle = () => <TextPost title={'With title'}></TextPost>;

export const withoutTitle = () => <TextPost></TextPost>;

export const withText = () => (
  <TextPost
    text={
      'Laborum proident ex cillum officia exercitation ea est ad duis consectetur.'
    }
  ></TextPost>
);

export const withTextAndTitle = () => (
  <TextPost
    user={user}
    title="New Post Title"
    text={
      'Laborum proident ex cillum officia exercitation ea est ad duis consectetur.'
    }
  ></TextPost>
);
