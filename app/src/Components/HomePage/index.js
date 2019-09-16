import React,{Component} from 'react';


class HomePage extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      show:false
    }
  }

  render(){
return (
<div>
    <h1>HomePage</h1>
    <div>
         <input type="text"/>
         <a className="doneBtn">DONE</a>
    </div>
    
</div>
  );

}}
export default HomePage;
