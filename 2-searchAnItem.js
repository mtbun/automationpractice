let swd = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Step 2 - Search for an Item Function
const searchAnItem = () => {
  const item = "Blouse";
  let open = tab.get("http://automationpractice.com/index.php");

  open
    .then(function () {
      let searchBlouse = tab
        .findElement(swd.By.id("search_query_top"))
        .sendKeys(item);
      return searchBlouse;
    })
    .then(function () {
      let pressSearch = tab.findElement(swd.By.name("submit_search")).click();
      return pressSearch;
    })
    .then(function () {
      tab
        .findElements(swd.By.className("ajax_block_product"))
        .then((numofitem) => {
          if (numofitem.length > 0) {
            console.log("Item listed in result page");
            return tab.quit();
          } else {
            console.log("Error");
            return tab.quit();
          }
        });
    });
};

searchAnItem();
