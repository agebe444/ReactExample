import React from "react";

import ExampleComponent from '../../components/exampleComponent/exampleComponent'

import cls from './example.css';

const Example = () => (
  <div className={cls.test}>
    <ExampleComponent message={'Hello :)'} />
  </div>
);

export default Example;
