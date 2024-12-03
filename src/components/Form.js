import { useState } from 'react';

export function Form({ addItem }) {
    //states
    const [description, setDesc] = useState("")
    const [quantity, setQuantity] = useState(1)
  
    //handler function
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description) return;
      
      const newItem = {
        id : Date.now(),
        description,
        quantity,
        packed : false, 
      }
      addItem(newItem);
      setDesc("");
      setQuantity(1);
    }
  
    function handleDescChange(event) {
      setDesc(event.target.value)
    }
    function handleQuantityChange(event) {
      setQuantity(Number(event.target.value))
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <input placeholder="Item..." value={description} onChange={handleDescChange} />
        <button>ADD</button>
      </form>
    );
  }