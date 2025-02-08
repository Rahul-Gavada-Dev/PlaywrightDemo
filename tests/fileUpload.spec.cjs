const {test,expect}=require("@playwright/test")
test("file upload",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles("./upload/Resume-Rahul_J_Gavada_Software_Testing_Engineer.pdf"); //It will select the file from the destination
    await page.locator("#file-submit").click(); //It will click on the upload button
    expect(await page.locator("//h3")).toHaveText("File Uploaded!"); // It will check whether <h3></h3> tag has "File uploaded!" text
})