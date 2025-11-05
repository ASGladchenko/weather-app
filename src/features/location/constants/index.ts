export const GEOLOCATION_ERRORS = {
  NOT_SUPPORTED: 'Geolocation is not supported by your browser',
  PERMISSION_DENIED: 'Permission to access geolocation was denied',
  POSITION_UNAVAILABLE: 'Location information is unavailable',
  TIMEOUT: 'The request to get user location timed out',
  UNKNOWN: 'An unknown error occurred while retrieving geolocation',
} as const;
