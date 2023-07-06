const moment = require('moment');

// module.exports = {
//   format_date: (date) => {
//     // Format date as MM/DD/YYYY using moment.js
//     return moment(date).format('MM/DD/YYYY');
//   }
// };

module.exports = {
  format_date: (date) => {
    // Check if date is undefined or null
    if (!date) {
      return ''; // Return an empty string or any other default value you prefer
    }

    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  }
};

