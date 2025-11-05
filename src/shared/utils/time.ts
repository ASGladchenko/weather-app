export const getShortWeekDay = (date: number): string => {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }

  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateObj);
};

export const getHourFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};
