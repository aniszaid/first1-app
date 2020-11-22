

import React, { Component ,Fragment} from 'react'
import Card from './Card'
import Navigation from './Componant/Navigation';
import './App.css'

 class App extends Component {
   state={
     Card:[
       {name:'Nawab', age:'20', body:'You are in the my world'},
       {name:'john Doe', age:'30', body:'Go gone Back'},
       {name:'johnoo', age:'25', body:'Yti you are in the my world'},
       {name:'Hero', age:'29', body:'m ni manta'},
     ],
      username: 'No name',
   };

      onHandelData=(newName)=>{
                alert('click ho gya')
                this.setState({

          Card:[
            {name:'newName', age:'20', body:'You are in the my world'},
            {name:'john Doe', age:'30', body:'Go gone Back'},
            {name:'johnru', age:'25', body:'Yti you are in the my world'},
            {name:'Hero', age:'29', body:'m ni manta'},
          ]

        });
      }

      onChangeName=(event)=>{
        this.setState({username:event.target.value});
      }

     /* onHandelData=()=>{
        this.setState({
          Show:!this.state.Show
        });
        console.log(this.state.Show);
      }*/
      onGoSomeWhere=() => {
          alert('child pressed');
      }
  
  render() {
    
    return (
     
     <Fragment>
       <Navigation/>
       <br/>
       <br/>
       <div className="container">
       <br/>
       <input onChange={this.onChangeName} value={this.state.username} type='text'/>
       <p>{this.state.username}</p>
       <br/>
       <br/>
       <button type="button" 
         //onClick={this.onHandelData.bind(this,'Trixi Decker')} 
        onClick={ ()=> this.onHandelData('Trixi Decker')}
       className="btn btn-info">Show/Hide</button>
       <hr/>
       <br/>
       <Card name={this.state.Card[0].name} age={this.state.Card[0].age} body={this.state.Card[0].body} click={this.onGoSomeWhere}/>
       <Card name={this.state.Card[1].name} age={this.state.Card[1].age} body={this.state.Card[1].body}  click={this.onGoSomeWhere}/>
       <Card name={this.state.Card[2].name} age={this.state.Card[2].age} body={this.state.Card[2].body} click={this.onGoSomeWhere}/>
       </div>
     </Fragment>
     
    )
  }
}


export default App;
