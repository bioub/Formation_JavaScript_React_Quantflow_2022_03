import { useState } from 'react';

function HelloworldHooks() {
  const [name, setName] = useState('Romain');

  function handleChange(event) {
    /** @type {HTMLInputElement} */
    const target = event.target;

    setName(target.value);
  }

  return (
    <div className="HelloworldHooks">
      <div className="Helloworld">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleChange} />
        <hr />
        <h1>Hello {name}!</h1>
      </div>
    </div>
  );
}

export default HelloworldHooks;
