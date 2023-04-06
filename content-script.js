browser.browserAction.onClicked.addListener((tab) => {
    const url = new URL(tab.url);
    if (url.searchParams.has("no_cache")) {
      url.searchParams.delete("no_cache");
    } else {
      url.searchParams.set("no_cache", "1");
    }
    browser.tabs.update(tab.id, { url: url.href });
  });
  