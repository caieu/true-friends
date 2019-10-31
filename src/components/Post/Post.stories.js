import React from 'react';
import Post from './Post';

export default {
  title: 'Post'
};

export const withTitle = () => <Post title={'With title'}></Post>;

export const withoutTitle = () => <Post></Post>;

export const withText = () => (
  <Post
    text={
      'Laborum proident ex cillum officia exercitation ea est ad duis consectetur.'
    }
  ></Post>
);
