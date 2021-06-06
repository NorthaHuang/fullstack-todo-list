import { useState, useEffect, useRef } from 'react';

const App = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');

  // Focus on input when user first visit
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // Clear input value
    setMessage('');
  }

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        <li>
          <p>哈囉你好嗎</p>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
