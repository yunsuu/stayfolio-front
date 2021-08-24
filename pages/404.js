import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// pages/404.js
export default function Custom404() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(true);
  useEffect(() => {
    let interval = null;
    if (redirect) {
      setRedirect(false);
      interval = setInterval(() => {
        router.push('/');
      }, 5000);
    }
    return () => (interval ? clearInterval(interval) : null);
  }, []);

  return <h1>404 - Page Not Found</h1>;
}
