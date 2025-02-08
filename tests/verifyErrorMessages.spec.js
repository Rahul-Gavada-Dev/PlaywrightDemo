const {test,expect}=require('@playwright/test');
test.use({viewport:{width:1056,height:756}})
test("Validate error message", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await console.log(page.viewportSize().height);
    await console.log(page.viewportSize().width);
    await page.getByPlaceholder("Username").type("Admin");
    await page.getByPlaceholder("Password").type("admin1234567890");
    await page.locator("//button[@type='submit']").click();
    const errorMessage=await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
    console.log("error message is"+errorMessage);
    expect(errorMessage.includes("Invalid")).toBeTruthy(); // if we need to verify only includes then we can write it
    expect(errorMessage==="Invalid credentials").toBeTruthy(); // if we need to validate complete message then we can write it

})