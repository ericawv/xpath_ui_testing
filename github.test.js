const { Builder, Capabilities, By } = require("selenium-webdriver") 
const { threadId } = require("worker_threads")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

test("Github", async () => {
    await driver.get('https://www.github.com/')

    let signIn = await driver.findElement(By.css('[href="/login"]')).click()

    await driver.findElement(By.css('[name="login"]')).sendKeys('ericavbpf@gmail.com')

    await driver.findElement(By.css('[name="password"]')).sendKeys('Alex1977!!')

    await driver.findElement(By.css('[name="commit"]')).click()

    await driver.findElement(By.css('[class="avatar avatar-small circle"]')).click()

    // driver.findElement(By.css('[data-hydro-click-hmac="48191b45047acd8773b3cddb27021c7f069089ff3eb5efcf7b4c72287dd46724"]')).click()

    // Thread.sleep(2000)

    

    await driver.sleep(5000)

     await driver.quit()
})