let swd = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();
const assert = require("assert");

const person = {
  email: "metebunyaminn@gmail.com",
  password: "12345",
};

//Step 1 - Login Function
const login = () => {
  let open = tab.get("http://automationpractice.com/index.php");

  open
    .then(function () {
      let gologin = tab.findElement(swd.By.className("login")).click();
      return gologin;
    })

    .then(function () {
      let username = tab.findElement(swd.By.id("email")).sendKeys(person.email);
      return username;
    })

    .then(function () {
      let password = tab
        .findElement(swd.By.id("passwd"))
        .sendKeys(person.password);
      return password;
    })

    .then(function () {
      let pressLogin = tab
        .findElement(swd.By.className("icon-lock left"))
        .click();
      return pressLogin;
    })

    .then(function () {
      let expectedTitle = "My account - My Store";
      tab.getTitle().then((actualTitle) => {
        if (expectedTitle == actualTitle) {
          console.log("looggeed in succesfully");
        }
        return assert.equal(actualTitle, expectedTitle);
      });
      tab.quit();
    });
};

login();
