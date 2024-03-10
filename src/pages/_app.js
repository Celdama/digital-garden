import React, { useEffect, useState } from 'react';
import { App } from '@components';

export default function NextApp(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <App {...props} /> : null;

  // return <App {...props} />;
}
