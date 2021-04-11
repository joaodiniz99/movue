export default {
  // function that get date in timestamp format and returns in date format
  getDate: function(timestamp) {
    var mili = timestamp * 1000;
    const data = new Date(mili);

    return data;
  }

}