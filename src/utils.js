export function getYear() {
  return new Date().getFullYear();
};

// current date in unix timestamp
export const getYearInSeconds = () => {
  return Math.floor(Date.now() / 1000);
}

// one year date in unix timestamp
export const getLastYearInSeconds = () => {
  const oneYearInSec = 31622400;
  return getYearInSeconds() - oneYearInSec;
}

export const getUnixTimestamp = (index) => {
  const oneDayInSec = 86400;
  const oneYearInSec = 31622400;
  return getYearInSeconds() - oneYearInSec + (oneDayInSec * index);
}

export const getDecimalsLength = (num) => {
  let stringified = num.toString()
  const dot = '.',
        start = (stringified.indexOf(dot) + 1).toString();
  if (stringified.includes(dot)) {
    return stringified.slice(start).length
  }
  return 0
}