import { useEffect, useState } from 'react';

function NoSSR({ children }) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  return canRender ? children : <></>;
}

export default NoSSR;