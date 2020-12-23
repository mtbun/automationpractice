let swd = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();
const assert = require("assert");
const { fstat } = require("fs");

const person = {
    email: "metebunyaminn@gmail.com",
    password: "12345",
};

const login = async () => {
    let open = await tab.get("http://automationpractice.com/index.php");
    

    f1 = () => {
            let gologin = tab.findElement(swd.By.className("login")).click();
            return gologin;
        }
    f1()

    f2 = () => {
            let username = tab.findElement(swd.By.id("email")).sendKeys(person.email);
            return username;
        }
    
    await f2()

    await (() => {
        let password = tab
            .findElement(swd.By.id("passwd"))
            .sendKeys(person.password);
            return password;
        })

    await (() => {
        let pressLogin = tab
            .findElement(swd.By.className("icon-lock left"))
            .click();
            return pressLogin;
    })

    await (() => {
            let expectedTitle = "My account - My Store";
            tab.getTitle().then((actualTitle) => {
                if (expectedTitle == actualTitle){
                    console.log('looggeed in succesfully');
                };
                return assert.equal(actualTitle,expectedTitle);
            });
            tab.quit();
    })
 }

login();