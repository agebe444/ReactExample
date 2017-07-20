import 'babel-polyfill';

import React from 'react'
import { render } from 'react-dom'

import Example from "./containers/example/example"

render(
  <Example />,
  document.getElementById('app')
)
