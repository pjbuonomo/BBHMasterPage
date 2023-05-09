function getAverageCompletionTime() {
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
    var requestUri = siteUrl + "/_api/web/lists/getbytitle('PurchaseRequests')/items?$select=Assigned_x0020_Date,Completed_x0020_Date";
    
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
  
        for (var i = 0; i < results.length; i++) {
          var createdDate = new Date(results[i].Assigned_x0020_Date);
          var completedDate = results[i].Completed_x0020_Date;
  
          if (completedDate) {
            completedDate = new Date(completedDate);
            var timeDifference = completedDate - createdDate;
            totalTime += timeDifference;
            validItems++;
          }
        }
  
        var averageCompletionTime = totalTime / validItems;
  
        // Convert milliseconds to a more readable format (e.g., days, hours, minutes)
        var minutes = Math.floor(averageCompletionTime / 60000);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        minutes %= 60;
        hours %= 24;
  
        // Format the time as "XX d XX hr"
        var formattedTime = days + " d " + hours + " hr";
  
        // Update the inner HTML of the element with the specified ID
        $('#AverageCompletionTime').html(formattedTime);
      },
      error: function (error) {
        console.log("Error:", error);
      }
    });
  }
  
  $(document).ready(function () {
    getAverageCompletionTime();
  });