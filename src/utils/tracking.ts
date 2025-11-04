/**
 * Tracking utility to capture and persist tracking parameters across page navigation
 */

const TRACKING_STORAGE_KEY = 'winfastcasinos_tracking';
const TRACKING_PARAMS = ['gclid', 'payload', 'clickid', 'afp', 'gcslid', 'visit_id', 'subid', 'trackid', 'ref'];

/**
 * Captures tracking value from URL parameters and stores it in sessionStorage
 * Priority order: gclid > payload > clickid > afp > gcslid > visit_id > etc.
 */
export function captureTrackingFromURL(): string {
  if (typeof window === 'undefined') return '';
  
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check URL parameters first
  let capturedValue = '';
  for (const param of TRACKING_PARAMS) {
    const value = urlParams.get(param);
    if (value) {
      capturedValue = value;
      break; // Use first found value
    }
  }
  
  // If found in URL, store it in sessionStorage
  if (capturedValue) {
    try {
      sessionStorage.setItem(TRACKING_STORAGE_KEY, capturedValue);
      console.log('📌 Stored tracking value:', capturedValue);
    } catch (e) {
      console.warn('Failed to store tracking value:', e);
    }
  }
  
  return capturedValue;
}

/**
 * Gets the stored tracking value from sessionStorage
 */
export function getStoredTrackingValue(): string {
  if (typeof window === 'undefined') return '';
  
  try {
    return sessionStorage.getItem(TRACKING_STORAGE_KEY) || '';
  } catch (e) {
    return '';
  }
}

/**
 * Gets tracking value - checks URL first, then sessionStorage
 */
export function getTrackingValue(): string {
  const urlValue = captureTrackingFromURL();
  if (urlValue) {
    return urlValue;
  }
  
  return getStoredTrackingValue();
}

/**
 * Clears the stored tracking value
 */
export function clearTrackingValue(): void {
  if (typeof window === 'undefined') return;
  
  try {
    sessionStorage.removeItem(TRACKING_STORAGE_KEY);
  } catch (e) {
    // Ignore errors
  }
}

