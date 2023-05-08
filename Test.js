const siteUrl = _spPageContextInfo.webAbsoluteUrl;
const listName = "PurchaseRequests";

async function getListItems() {
  const response = await fetch(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items?$select=ID,Created,Completed_x0020_Date`, {
    method: "GET",
    headers: {
      Accept: "application/json;odata=verbose"
    }
  });

  const data = await response.json();
  return data.d.results;
}

async function calculateAverageCompletionTime() {
  const listItems = await getListItems();
  const completedItems = listItems.filter(item => item.Completed_x0020_Date != null);

  const completionTimes = completedItems.map(item => {
    const createdDate = new Date(item.Created);
    const completedDate = new Date(item.Completed_x0020_Date);
    const timeDifference = completedDate.getTime() - createdDate.getTime();
    return timeDifference;
  });

  const averageCompletionTime = completionTimes.reduce((total, time) => total + time, 0) / completionTimes.length;
  document.getElementById("AverageCompletionTime").innerHTML = `${averageCompletionTime} milliseconds`;
}

calculateAverageCompletionTime();
