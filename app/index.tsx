import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching from FastAPI:', err));
  }, []);

  return (
    <div>
      <h1>Message from FastAPI:</h1>
      <p>{message}</p>
    </div>
  );
}
