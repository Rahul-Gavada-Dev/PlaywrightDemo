const {test,expect}=require("@playwright/test");
test("Handle hidden values from dropdown",async function({page}){
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.locator("[name='username']").fill('Admin');
   await page.locator("[name='password']").fill('admin123');
   await page.locator("[type='submit']").click();
   await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();
   await page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)").click();

   const options=await page.$$('//div[@role="listbox"]//span')  //actual options will capture by this locator, we will store it in a variable
   for(let option of options){
        const jobTitle=await option.textContent();
        //console.log(jobTitle);
        if(jobTitle.includes("QA-Engineer")){
         await option.click();
         await waitForTimeout(5000);
         break;
        }
   }
   await page.waitForTimeout(5000);
   
});