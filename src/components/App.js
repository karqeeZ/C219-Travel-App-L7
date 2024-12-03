import {Form} from './Form.js'
import Logo from './Logo.js'
import {PackingList} from './PackingList.js'
import { useState } from 'react'
import {Stats} from './Stats.js'

function App() {
  const [items, setItems] = useState([])
  function handleAddItems(item) {
    setItems((prevItem)=>[...prevItem, item]);
  }
  function handleDeleteItem(id) {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id))
  }
  function handleUpdateItem(id) {
    setItems((prevItem)=>prevItem.map(
      (item) => item.id === id ? {...item, packed: !item.packed} : item
    ));
  }
  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItems}/>
      <PackingList 
      items={items}
      onDeleteItem={handleDeleteItem}
      onUpdateItem={handleUpdateItem}
      />
      <Stats 
      item={items}
      />
    </div>
  );
}

export default App;
