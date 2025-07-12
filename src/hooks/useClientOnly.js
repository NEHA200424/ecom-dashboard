import { useState, useEffect } from 'react';

export default function useClientOnly() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
