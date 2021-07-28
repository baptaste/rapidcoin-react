// npm
import React from 'react';
import { render } from 'react-dom';

// local
import App from 'src/components/App';

const rootReactElement = <App />;

const target = document.getElementById('root');

render(rootReactElement, target);