# Simple CMS with Google Sheets and React

To setup Google sheets as an endpoint, create your Google Sheet, open Extensions Tab and select Apps Script

add the following code

```
function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet1'); // Change 'Sheet1' to your sheet name
  var data = sheet.getDataRange().getValues();

  var jsonData = [];
  var headers = data[0];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var entry = {};

    for (var j = 0; j < headers.length; j++) {
      entry[headers[j]] = row[j];
    }

    jsonData.push(entry);
  }

  return ContentService.createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}
```

and click Deploy.

When deployment is over an endpoint URL will be displayed to be used as an environment variable **VITE_API_URL**
