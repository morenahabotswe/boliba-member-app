import { useMemo } from 'react';

export function useBolibaBrandPalette() {
  return useMemo(
    () => ({
      primary: '#1E237E',
      accent: '#00AEEF',
      lightBlue: '#A7E6F4',
      darkNavy: '#0A2A4A'
    }),
    []
  );
}
