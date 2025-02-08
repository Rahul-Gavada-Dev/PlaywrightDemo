const {test,expect}=require("@playwright/test");
test("handle multiple tabs",async function({browser}){  //browser object is used to deals with the browser
    const context=await browser.newContext();  //context is nothing but new environment to handle multiple tabs concept
    const page=await context.newPage();  //page represents a original page . tab/window,we can create multiple tabs/windows, if we want to work with original window then we can use this object
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const [newPage]=await Promise.all    //returned promise is new page, it is nothing but new tab/new window, if we want to work with new tab then we can use this object
    (

        [
           context.waitForEvent("page"),  //This is one promise 
           page.locator("(//a[contains(@href,'facebook')])[1]").click();  //This is another promise
        ]
    )
    await newPage.waitForTimeout(5000); //It will wait for 5 seconds
    await newPage.locator("(//input[@name='email'])[2]").fill("mukesh@gmail.com");  //Here we are typing text in the new tab/new window which is getting opened after clicking on the facebook icon
    await newPage.waitForTimeout(5000); //It will wait for 5 seconds
    await newPage.close(); //It will close the new page/tab which we have created/opened


    await page.locator("#email").fill("admin@gmail.com");   // here we are dealing with the main/original page, so we are using page object 
    
})