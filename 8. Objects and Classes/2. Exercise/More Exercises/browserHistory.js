function browserHistory(obj, arr) {
  let browser = obj["Browser Name"];
  let openTabs = obj["Open Tabs"];
  let recentlyClosed = obj["Recently Closed"];
  let browserLogs = obj["Browser Logs"];

  arr.forEach(element => {
    let [command, tab] = element.split(' ');

    switch (command) {
      case 'Open':
        openTabs.push(tab);
        browserLogs.push(element);
        break;
      case 'Close':
        if (openTabs.includes(tab)) {
          let index = openTabs.indexOf(tab);
          let removedTab = openTabs.splice(index, 1).toString();
          recentlyClosed.push(removedTab);
          browserLogs.push(element);
        }
        break;
      default:
        openTabs = [];
        recentlyClosed = [];
        browserLogs = [];
        break;
    }
  });

  console.log(browser);
  console.log(`Open Tabs: ${openTabs.join(', ')}`);
  console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
  console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}

// Test 1 
console.log('\n----------------Test 1----------------\n');

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

/* Results: 
  Google Chrome
  Open Tabs: YouTube, Google Translate, StackOverFlow, Google
  Recently Closed: Yahoo, Gmail, Facebook
  Browser Logs: Open YouTube, Open Yahoo, Open Google Translate, Close Yahoo, Open 
  Gmail, Close Gmail, Open Facebook, Close Facebook, Open StackOverFlow, Open Google
*/

// Test 2 
console.log('\n----------------Test 2----------------\n');

browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube",
      "Close Dropbox"
    ]
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);

/* Results: 
  Mozilla Firefox
  Open Tabs: Twitter
  Recently Closed: 
  Browser Logs: Open Twitter
*/