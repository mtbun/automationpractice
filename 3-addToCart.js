let swd = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

const addToCart = () => {
  let open = tab.get("http://automationpractice.com/index.php");
  open
    .then(function () {
      let dresses = tab
        .findElement(swd.By.xpath('//*[@id="block_top_menu"]/ul/li[2]/a'))
        .sendKeys("3");
      return dresses;
    })
    .then(function () {
      let summerDresses = tab.findElement(
        swd.By.xpath('//*[@id="block_top_menu"]/ul/li[2]/ul/li[3]/a')
      );
      return summerDresses.click();
    })
    .then(function () {
      return tab.sleep(2000);
    })
    .then(function () {
      //Assert
      tab
        .findElements(swd.By.className("ajax_block_product"))
        .then((numofitem) => {
          if (numofitem.length > 0) {
            console.log("Item listed in result page");
          } else {
            console.log("Fail");
          }
        });

      return true;
    })
    .then(function () {
      return tab.sleep(1000);
    })
    .then(function () {
      let product = tab.findElement(
        swd.By.xpath('//*[@id="center_column"]/ul/li[3]/div/div[2]/h5')
      );
      return product.click();
    })
    .then(function () {
      return tab.sleep(1000);
    })
    .then(function () {
      let adddToCart = tab.findElement(swd.By.linkText("Add to cart")).click();
      return adddToCart;
    })
    .then(function () {
      return tab.sleep(2000);
    })

    .then(function () {
      let goToCart = tab
        .findElement(swd.By.linkText("Proceed to checkout"))
        .click();
      return goToCart;
    })
    .then(function () {
      tab
        .findElement(swd.By.className("cart_quantity_input"))
        .getAttribute("value")
        .then((qty) => {
          if (qty == "1") {
            return [
              tab.quit(),
              console.log("Printed Chiffon Dress added to the cart"),
            ];
          } else {
            return [tab.quit(), console.log("Fail")];
          }
        });
    });
};

addToCart();
