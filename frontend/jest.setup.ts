import '@testing-library/jest-dom';
import type { ImageProps } from 'next/image';
import * as React from 'react';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props: ImageProps) {
    return React.createElement('img', {
      src: typeof props.src === 'string' ? props.src : 'test-path',
      width: props.width,
      height: props.height,
      alt: props.alt,
      'data-testid': 'mock-image'
    });
  }
}));

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: {},
    pathname: '',
    asPath: '',
    route: '',
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }),
}));

// Mock FontAwesome
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: function MockFontAwesome(props: any) {
    return React.createElement('i', {
      'data-testid': 'font-awesome-icon',
      ...props
    });
  }
}));

// Mock CSS modules
jest.mock('@/styles/components/*.module.scss', () => ({
  __esModule: true,
  default: {},
}), { virtual: true });

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});