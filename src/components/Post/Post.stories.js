import React from 'react';
import Post from './Post';

export default {
  title: 'Post'
};

export const withTitle = () => <Post title={'Com Titulo'}></Post>;

export const withoutTitle = () => <Post></Post>;

export const withText = () => (
  <Post
    text={'Texto do post. É muito legal essa parada ake! Recomendo GERAL'}
  ></Post>
);
