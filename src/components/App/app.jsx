import React from 'react';
import Title from '../Title/title.jsx';
import ImageOslo from '../../assets/images/IMG_20170829_194623.jpg';

const title = 'React with Webpack and Babel';

function App() {
  return (
    <div>
      <Title text={title} />
      <img src={ImageOslo} alt="oslo" width="50%"/>
    </div>
  );
}

export default App;
