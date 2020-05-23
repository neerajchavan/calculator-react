import React , {Component} from 'react';



class App extends Component {

  constructor(){
    super()
    this.state={
      count:'0',
      exception : ''
    }

  this.resetScreen = this.resetScreen.bind(this)
  this.addDot = this.addDot.bind(this)
  this.calculate = this.calculate.bind(this)
  this.resetScreen = this.resetScreen.bind(this)
  }


  resetScreen()
  {
    this.setState({
      count: '0'
    })
  }



  addDot = val => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.count.indexOf(".") === -1) {
      this.setState({ count: this.state.count + val });
    }
  };


  calculate(){
    const {count}=this.state

    try
    {
    this.setState({
      count:eval(count)
    })
    }

    catch(exeption)
    {
      console.log("Syntax errr!",exeption)
    }
  }

  changeValue(digit)
  {
    const {count}=this.state

    this.setState(
      {
       count : count=='0'? String(digit) : count + digit
      })
  }


render(){
    return (
 <div className=''>

    <div className=''>
      <input value={this.state.count}/>
    </div>

    <div className=''>
      <button onClick={()=> this.changeValue(1)}>1</button>
      <button onClick={()=> this.changeValue(2)}>2</button>
      <button onClick={()=> this.changeValue(3)}>3</button>
      <button onClick={()=> this.changeValue('+')}>+</button>
    </div>

    <div className=''>
      <button onClick={()=> this.changeValue(4)}>4</button>
      <button onClick={()=> this.changeValue(5)}>5</button>
      <button onClick={()=> this.changeValue(6)}>6</button>
      <button onClick={()=> this.changeValue('-')}>-</button>
    </div>

    <div className=''>
      <button onClick={()=> this.changeValue(7)}>7</button>
      <button onClick={()=> this.changeValue(8)}>8</button>
      <button onClick={()=> this.changeValue(9)}>9</button>
      <button onClick={()=> this.changeValue('*')}>*</button>
    </div>

    <div className=''>
      <button onClick={()=> this.changeValue(0)}>0</button>
      <button onClick={this.resetScreen}>C</button>
      <button onClick={()=> this.addDot()}>.</button>
      <button onClick={()=> this.changeValue('/')}>/</button>
    </div>

    <div className='row'>
      <button className='calculate' onClick={()=>this.calculate()}>=</button>
    </div>

    <div>
     <h1>{this.state.exception}</h1>
    </div>

 </div>
  )
}
}

export default App;
