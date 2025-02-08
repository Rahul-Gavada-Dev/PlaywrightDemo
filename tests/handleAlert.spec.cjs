const {test,expect}=require('@playwright/test');
test("Handle alert",async function ({page}){
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  page.on("dialog",async function(d){
   expect(d.type()).toContain("alert");
   expect(d.message()).toContain("I am JS Alert");
   await d.accept();  

  })

  await page.locator("//button[text()='Click for JS Alert']").click();  //x path


})