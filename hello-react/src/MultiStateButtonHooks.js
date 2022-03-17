import { useState } from 'react';

function MultiStateButtonHooks({ items = [] }) {
  const [selected, setSelected] = useState(items[0]);

  function handleClick() {
    const index = items.indexOf(selected);
    setSelected(items[(index + 1) % items.length]);
  }

  return (
    <button className="MultiStateButton" onClick={handleClick}>
      {selected}
    </button>
  );
}

export default MultiStateButtonHooks;
