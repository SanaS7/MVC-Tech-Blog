const moment = require('moment');

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY using moment.js
    return moment(date).format('MM/DD/YYYY');
  }
};
