export function disableButton() {
  const startTime = new Date();
  startTime.setHours(9, 15, 0); // Set start time to 9:15 AM
  const endTime = new Date();
  endTime.setHours(15, 30, 0); // Set end time to 3:30 PM
  let now = new Date();
  let currentTime = now.getTime(); // Get current time in milliseconds

  if (currentTime >= startTime.getTime() && currentTime <= endTime.getTime()) {
    return false;
  } else {
    return true;
  }
}
