import React from 'react';
import './Listitem.css';

function List(props){
    // const items = props.item;
    // const listItems = items.map(item => {
    //     return <div className="row mx-auto mb-3" key={item.key}>
    //         <div className="col-12">
    //             <div className="list bg-warning">
    //                 <div className="row">
    //                     <div className="col-9">
    //                         <p>{item.text}</p>
    //                     </div>
    //                     <div className="col-3">
    //                         <button className="btn" onClick={ () => props.deleteItem(item.key)}><i className="fa fa-trash"></i></button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // })
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <button className="btn" onClick={() => {
            props.deleteItem(item.key)
        }}><i class="text-light fa fa-fw fa-trash"></i></button>
        </span>
     </p>
     
    </div>})

    return(
        <div>
            {listItems}
        </div>
    )
}

export default List;