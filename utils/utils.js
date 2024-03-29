/**
 * Utility method used with the StopWatch component 
 * (https://github.com/michaeljstevens/react-native-stopwatch-timer/tree/252d08c49362b8c8926fe146409e133dedce0424)
 */
function formatTimeString(time, showMsecs) {
  let msecs = time % 1000;

  if (msecs < 10) {
    msecs = `00${msecs}`;
  } else if (msecs < 100) {
    msecs = `0${msecs}`;
  }

  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(time / 60000);
  seconds = seconds - minutes * 60;
  let formatted;
  if (showMsecs) {
    formatted = `0${minutes}:${seconds < 10 ? 0 : ""}${seconds}:${msecs}`;
  } else {
    formatted = `0${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
  }

  return formatted;
}

export { formatTimeString };
