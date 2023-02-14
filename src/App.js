import logo from './logo.svg';
import './App.css';
import Box from './Box';
import { Component } from 'react';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={idDisplay:true};
  }
  onRemoveBox=()=>
  {
    this.setState({idDisplay:false});
  }
  render()
  {
    return (
      <div>
        {this.state.idDisplay && <Box/>}
        <div onClick={this.onRemoveBox}>Xóa component Box</div>
      </div>
    )
  }
}

export default App;
