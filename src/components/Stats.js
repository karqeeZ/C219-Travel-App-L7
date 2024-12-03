export function Stats({ item }) {
    const numItems = item.length
    const numPackItems = item.filter((item)=>item.packed).length
    const percentage = Math.round(numPackItems / numItems * 100)
  
    return (
      <footer className="stats">
        <em>You have {numItems} items in the list. You already packed {numPackItems} ({percentage}%).<br></br></em>
        {percentage === 100 && "You got everything!!"}
      </footer>
    );
  }