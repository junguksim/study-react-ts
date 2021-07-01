import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Hello name="심정욱" color="red"/>
      <Hello name="박진영" color="blue" />
      <Hello color="blue" />
    </Wrapper>
  )
}

export default App;
