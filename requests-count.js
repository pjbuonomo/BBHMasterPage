function getAverageCompletionTime(range) {
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
    var requestUri = siteUrl + "/_api/web/lists/getbytitle('PurchaseRequests')/items?$select=Assigned_x0020_Date,Completed_x0020_Date";
    
    var now = new Date();
    var startDate;
    switch (range) {
      case "week":
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        break;
      case "month":
        startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        break;
      case "year":
        startDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        break;
    }
  
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
        var previousTotalTime = 0;
        var previousValidItems = 0;
  
        for (var i = 0; i < results.length; i++) {
          var createdDate = new Date(results[i].Assigned_x0020_Date);
          var completedDate = results[i].Completed_x0020_Date;
  
          if (completedDate) {
            completedDate = new Date(completedDate);
            var timeDifference = completedDate - createdDate;
            if (createdDate >= startDate) {
              totalTime += timeDifference;
              validItems++;
            } else {
              previousTotalTime += timeDifference;
              previousValidItems++;
            }
          }
        }
  
        var averageCompletionTime = totalTime / validItems;
        var previousAverageCompletionTime = previousTotalTime / previousValidItems;
  
        // Calculate the percentage change
        var percentageChange = ((averageCompletionTime - previousAverageCompletionTime) / previousAverageCompletionTime) * 100;
  
        // Convert milliseconds to a more readable format (e.g., days, hours, minutes)
        var minutes = Math.floor(averageCompletionTime / 60000);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        minutes %= 60;
        hours %= 24;

        // Format the time as "XX d XX hr XX min"
        var formattedTime = days + " d " + hours + " hr " + minutes + " min";

        // Update the inner HTML of the element with the specified ID
        $('#newRequests').html(formattedTime);
        $('#percentage-trend').html((percentageChange > 0 ? '+' : '') + percentageChange.toFixed(2) + '%');
        
        // Update the title
        updateTitle(range);
        }

        $(document).ready(function () {
        getAverageCompletionTime('week');
        
        $('a.dropdown-item').on('click', function (e) {
            e.preventDefault();
            var range = $(this).text().trim().toLowerCase().replace('this ', '');
            getAverageCompletionTime(range);
        });
});













  




