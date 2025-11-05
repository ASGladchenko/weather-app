export const GEOLOCATION_ERRORS = {
  TIMEOUT: 'The request to get user location timed out',
  POSITION_UNAVAILABLE: 'Location information is unavailable',
  NOT_SUPPORTED: 'Geolocation is not supported by your browser',
  PERMISSION_DENIED: 'Permission to access geolocation was denied',
  UNKNOWN: 'An unknown error occurred while retrieving geolocation',
} as const;
