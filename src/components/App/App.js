import React from 'react';
import './App.css';
import List from '../List/Listitem';

// class App extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             items:[],
//             currentItem:{
//                 text:'',
//                 key:''
//             }
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.addItem = this.addItem.bind(this);
//         this.handledeleteItem = this.handledeleteItem.bind(this);
//     }

//     handleInput(e){
//         this.setState({
//             currentItem:{
//                 text:e.target.value,
//                 key:Date.now()
//             }
//         })
//     }

//     addItem(e){
//         e.preventDefault();
//         const newItem = this.state.currentItem;
//         // console.log(newItem);
//         if(newItem.text!==''){
//             const newItems=[...this.state.items, newItem];
//             this.setState({
//                 items:newItems,
//                 currentItem:{
//                     text:'',
//                     key:''
//                 }
//             })
//         }
//     }
//     handledeleteItem(key){
//         const filteredItem = this.state.items.filter(item => item.key!==key);
//         this.setState({
//             item:filteredItem
//         })
//     }

//     render(){
//         return(
//             <div className="App">
//                 <header>
//                     <form id="to-do-form" onSubmit={this.addItem}>
                        // <div className="form-group">
                        //     <div className="row mx-auto">
                        //         <div className="col-9">
                        //             <input className="form-control" type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput}/>
                        //         </div>
                        //         <div className="col-3">
                        //             <button type="submit" className="btn btn-primary">Add</button>
                        //         </div>
                        //     </div>
                        // </div>
//                     </form>
//                 </header>
//                 <List item={this.state.items} deleteItem={this.handledeleteItem} />
//             </div>
//         );
//     }
// }
// export default App;
class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items:[],
        currentItem:{
          text:'',
          key:''
        }
      }
      this.addItem = this.addItem.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !==""){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
      }
    }
    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }
    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
  
    }
    setUpdate(text,key){
      console.log("items:"+this.state.items);
      const items = this.state.items;
      items.map(item=>{      
        if(item.key===key){
          console.log(item.key +"    "+key)
          item.text= text;
        }
      })
      this.setState({
        items: items
      })
      
     
    }
   render(){
    return (
      <div className="App">
        <header>
          <h3 className="pt-3 text-center text-light">To Do List</h3>
          <form id="to-do-form" onSubmit={this.addItem}>
            <div className="form-group">
                <div className="row mx-auto">
                    <div className="col-9">
                        <input className="form-control" type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}/>
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-warning">Add</button>
                    </div>
                </div>
            </div>
          </form>
          <div className="listauto">
          <p>{this.state.items.text}</p>
          
            <List items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
          </div>
        </header>
      </div>
    );
   }
  }
  
  
  export default App;
  