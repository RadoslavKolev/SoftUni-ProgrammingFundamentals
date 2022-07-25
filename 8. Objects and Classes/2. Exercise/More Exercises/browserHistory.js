function browserHistory(obj, arr) {
  const browser = obj["Browser Name"];
  const openTabs = obj["Open Tabs"];
  const recentlyClosed = obj["Recently Closed"];
  const browserLogs = obj["Browser Logs"];

  arr.forEach(element => {
    const [command, tab] = element.split(' ');

    switch (command) {
      case 'Open':
        openTabs.push(tab);
        browserLogs.push(element);
        break;
      case 'Close':
        if (openTabs.includes(tab)) {
          const index = openTabs.indexOf(tab);
          const removedTab = openTabs.splice(index, 1).toString();
          recentlyClosed.push(removedTab);
          browserLogs.push(element);
        }
        break;
      default:
        // Empty the arrays
        openTabs.splice(0, openTabs.length);
        recentlyClosed.splice(0, recentlyClosed.length);
        browserLogs.splice(0, browserLogs.length);
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