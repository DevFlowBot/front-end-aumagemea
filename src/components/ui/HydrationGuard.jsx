'use client';

import { useEffect, useState } from 'react';

export function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  return mounted ? children : null;
}
