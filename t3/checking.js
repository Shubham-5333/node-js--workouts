var data = [
    { date: '2024-02-20', value: 10 },
    { date: '2024-02-21', value: 15 },
    { date: '2024-02-22', value: 20 },
    // Additional data objects with dates beyond today
];


function getDataUntilToday(data) {
  var today = new Date(); 
  var result = [];

  for (var i = 0; i < data.length; i++) {
      var currentDate = new Date(data[i].date); // Assuming each data item has a 'date' property

      // Compare currentDate with today's date
      if (currentDate <= today) {
          result.push(data[i]);
      } else {
          // Assuming data is sorted by date, if currentDate is greater than today's date, break the loop
          break;
      }
  }

  console.log("sad",result);
}


var filteredData = getDataUntilToday(data);
console.log(filteredData);

var currentYear = new Date().getFullYear();
console.log(currentYear);