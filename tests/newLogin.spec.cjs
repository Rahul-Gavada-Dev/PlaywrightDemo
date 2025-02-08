const {test,expect}=require("@playwright/test");
const testData=JSON.parse(JSON.stringify(require("../tests/testdata.json")));   // here we have imported the JSOn file, 
                                                     // stringify() method convert JS data into JSON string format, and parse() method converts
                                                     //  JSON string data into JS object format
test("login test",async function({page}){
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.locator("//input[@id='email1']").fill(testData.username);  // JSON file username data

  await page.locator("//input[@id='password1']").fill(testData.password);// JSOn file password data

})