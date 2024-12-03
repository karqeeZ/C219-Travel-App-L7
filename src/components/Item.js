export function Item({ itemPack, onDeleteItem, onUpdateItem }) {
    return (
      <li>
        <input type='checkbox' value={itemPack.packed} onChange={() => onUpdateItem(itemPack.id)}/>
        <span style={itemPack.packed ? { textDecoration: "line-through" } : {}}>
          {itemPack.description} ({itemPack.quantity})
        </span>
        <button style={{color: 'red'}} onClick={() => onDeleteItem(itemPack.id)}>X</button>
      </li>
    );
  }