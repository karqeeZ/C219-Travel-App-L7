import {Item} from './Item.js'

export function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item 
          key={item.id} 
          itemPack={item} 
          onDeleteItem={onDeleteItem} 
          onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}