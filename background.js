const TARGET_SITE = "https://freedium.cfd/";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-article-on-freedium",
    title: "Open this article on Freedium",
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-article-on-freedium") {
    const originalUrl = new URL(info.linkUrl);
    const newPath = `${originalUrl.pathname}${originalUrl.search}${originalUrl.hash}`;
    const newUrl = TARGET_SITE + newPath;

    chrome.tabs.create({ url: newUrl });
  }
});
