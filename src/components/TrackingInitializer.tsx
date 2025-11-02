'use client';

import { useEffect } from 'react';
import { captureTrackingFromURL } from '@/utils/tracking';

/**
 * Component that initializes tracking on page load
 * Should be included in the root layout
 */
export default function TrackingInitializer() {
  useEffect(() => {
    // Capture tracking parameters from URL on every page load
    captureTrackingFromURL();
  }, []);

  return null; // This component doesn't render anything
}

