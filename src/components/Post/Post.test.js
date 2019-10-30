import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Post from './Post';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a title', () => {
  act(() => {
    render(<Post />, container);
  });
  expect(container.textContent).toBe('This post do not have a title.');

  act(() => {
    render(<Post title="New Title" />, container);
  });
  expect(container.textContent).toBe('New Title');
});
