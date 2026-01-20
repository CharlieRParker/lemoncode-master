import React from 'react';
import './styles.scss';

const App: React.FC = () => {
  console.log('Environment:', process.env.APP_ENV);

  return (
    <div>
      <div className="logo">Lemoncode Logo</div>
      <h1>hola mundo</h1>
    </div>
  );
};

export default App;