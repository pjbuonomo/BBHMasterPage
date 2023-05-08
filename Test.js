function getAverageCompletionTime() {
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
    var requestUri = siteUrl + "/_api/web/lists/getbytitle('PurchaseRequests')/items?$select=Created,Completed_x0020_Date";
    
    $.ajax({
      url: requestUri,
      type: "GET",
      headers: {
        "accept": "application/json;odata=verbose",
      },
      success: function (data) {
        var results = data.d.results;
        var totalTime = 0;
        var validItems = 0;
  
        console.log("Data:", results); // Log the data to check if it is correct
  
        for (var i = 0; i < results.length; i++) {
          var createdDate = new Date(results[i].Created);
          var completedDate = results[i].Completed_x0020_Date;
  
          if (completedDate) {
            completedDate = new Date(completedDate);
            var timeDifference = completedDate - createdDate;
            totalTime += timeDifference;
            validItems++;
  
            console.log("Created:", createdDate); // Log the created date
            console.log("Completed:", completedDate); // Log the completed date
            console.log("Difference:", timeDifference); // Log the time difference
          }
        }
  
        var averageCompletionTime = totalTime / validItems;
  
        // Convert milliseconds to a more readable format (e.g., hours, minutes, seconds)
        var seconds = Math.floor(averageCompletionTime / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
  
        seconds %= 60;
        minutes %= 60;
  
        var formattedTime = hours + ":" + minutes + ":" + seconds;
  
        // Log the formatted average completion time to the console
        console.log('Average completion time (HH:mm:ss):', formattedTime);
  
        // Update the inner HTML of the element with the specified ID
        $('#AverageCompletionTime').html('Average completion time (HH:mm:ss): ' + formattedTime);
      },
      error: function (error) {
        console.log("Error:", error);
      }
    });
  }
  
  $(document).ready(function () {
    getAverageCompletionTime();
  });