const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

test("Google", async () => {
    await driver.get('https://www.google.com/')
    
    let searchSelector = await driver.findElement(By.css('[name="q"]')).sendKeys('Harder They Fall \n') /* The search bar selector in CSS */

    // let searchBarElement = await driver.findElement(By.css(searchSelector))

    // await searchBarElement.sendKeys('Harder They Fall\n')

    await driver.sleep(5000)
    
    await driver.quit()
})