function parseYyyymmddhhmmss(yyyymmddhhmmss) {
  var yyyy = parseInt(yyyymmddhhmmss.substring(0, 4), 10);
  var MM = parseInt(yyyymmddhhmmss.substring(4, 4 + 2), 10);
  var dd = parseInt(yyyymmddhhmmss.substring(6, 6 + 2), 10);
  var hh = parseInt(yyyymmddhhmmss.substring(8, 8 + 2), 10);
  var mm = parseInt(yyyymmddhhmmss.substring(10, 10 + 2), 10);
  var ss = parseInt(yyyymmddhhmmss.substring(12, 12 + 2), 10);

  MM -= 1;
  dd -= 1;
  
  return new Date(yyyy, MM, dd, hh, mm, ss, 0);
}

module.exports = {
  parseYyyymmddhhmmss,
};
