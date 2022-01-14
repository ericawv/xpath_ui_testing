
const { Builder, Capabilities, By, until} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

test("Github profile location", async () => {
    await driver.get('https://github.com/')

    let signin = await driver.findElement(By.css('[href="/login"]'))
    await signin.click()
    await driver.sleep(2000)

    let username = await driver.findElement(By.css('#login_field'))
    await username.sendKeys('ericavbpf@gmail.com')
    await driver.sleep(2000)

    let password = await driver.findElement(By.css('#password'))
    await password.sendKeys('Alex1977!!')
    await driver.sleep(2000)

    let commit = await driver.findElement(By.css('[name="commit"]'))
    await commit.click()

    let userDropDown = await driver.findElement(By.xpath('(//span[@class="dropdown-caret"])[2]'))
    await userDropDown.click()
    await driver.sleep(2000)

    let yourProfileButton = await driver.findElement(By.xpath('//a[@data-hydro-click-hmac="48191b45047acd8773b3cddb27021c7f0b9089ff3eb5efcf7b4c72287dd46724"]'))
    await yourProfileButton.click()
    await driver.sleep(2000)

   let editProfileButton = await driver.findElement(By.xpath('//button[@class="btn btn-block js-profile-editable-edit-button"]'))
   await editProfileButton.click()
   await driver.sleep(2000)


   let textArea = await driver.findElement(By.xpath('//*[@id="user_profile_bio"]'))
   await textArea.sendKeys('Specializing in QA')
   await driver.sleep(2000)


   let saveBtn = await driver.findElement(By.xpath('//*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[1]/form/div[7]/button[1]'))
   await saveBtn.click()
   await driver.sleep(1000)

   await driver.quit()
})
