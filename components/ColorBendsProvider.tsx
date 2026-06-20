'use client';

import { useEffect, useState } from 'react';
import ColorBends from '@/components/ColorBends';

interface Props {
  colors?: string[];
  speed?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  intensity?: number;
  noise?: number;
  bandWidth?: number;
  rotation?: number;
  transparent?: boolean;
}

export default function ColorBendsProvider(props: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ColorBends {...props} />;
}
