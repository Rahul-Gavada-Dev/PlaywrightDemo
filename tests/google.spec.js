const {test,expect}=require('@playwright/test');
test("verify application title",async function({page}){
    await page.goto("https://www.google.com");
    const url=await page.url(); //it will return the url which we have stored in the url variable
    console.log("URL is"+url);
    // const title=await page.title();
    // console.log("Title is"+title);
    await expect(page).toHaveTitle("Google"); // Here we are expecting the title should be "Google"
  
})