import React, {Component} from 'react';  
import './App.css';  
import Alert from './Components/Alert';  
// import element Alert yang telah dibuat  
  
class App extends Component {  
  render(){  
    return ( 
      <div> 
      <Media image="react.jpg" title="React JS">  
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
      scelerisque ante sollicitudin. Cras purus odio, vestibulum  
      in vulputate at, tempus viverra turpis  
</Media>  
<Media image="angular.jpg" title="Angular JS">  
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
      scelerisque ante sollicitudin. Cras purus odio, vestibulum  
      in vulputate at, tempus viverra turpis  
</Media>
</div>
   );  
  }  
}  
  
export default App;  
