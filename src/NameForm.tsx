import { useState } from 'react';


export default function NameForm() {
    const [name, setName] = useState("")

   function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setName(event.target.value);
  }
    function handleClear() {
    setName("");
  }

    return (
       <div>
      <h1>Name Input</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      {name && <p>Hello, {name}!</p>}

      <button onClick={handleClear}>
        Clear
      </button>
    </div>
    )
}



