import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      answer: "Yes"
    }
  }

  render(){
    return (
      <div >
        <h1>Is state imporant ? </h1>          
        <h2>Answer is : {this.state.answer}</h2>
      </div>
    )
  }
}

export default App;
