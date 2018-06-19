import React from 'react';

import { storiesOf, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import HelloComp from './components/hello.stories';

const req = require.context('./components/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(fileName => {
    req(fileName);
  });  
}

configure(loadStories, module);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('HelloComp', module)
  .add('hello', () => <HelloComp />);