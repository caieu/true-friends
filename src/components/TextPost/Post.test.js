import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Post from './TextPost';

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
  expect(container.textContent).toBe('No user nameNo text');

  act(() => {
    render(<Post title="New Title" />, container);
  });
  expect(container.textContent).toBe('New TitleNo text');
});

it('renders with or without a text', () => {
  act(() => {
    render(<Post />, container);
  });
  expect(container.textContent).toBe('No user nameNo text');

  act(() => {
    render(<Post text="Do incididunt commodo ea occaecat." />, container);
  });
  expect(container.textContent).toBe('Do incididunt commodo ea occaecat.');
});

it('renders with title and a text', () => {
  act(() => {
    render(<Post />, container);
  });
  expect(container.textContent).toBe('No user nameNo text');

  act(() => {
    render(<Post title="New post" text="This is a new post." />, container);
  });
  expect(container.textContent).toBe('New postThis is a new post.');
});
