import { useEffect, useState } from 'react';

export default function FormattedNumber({ value }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{Number(value).toLocaleString('en-IN')}</>;
}


