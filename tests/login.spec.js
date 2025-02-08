const {test,expect}=require("@playwright/test");
test("Valid login",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").type("Admin",{delay:200});  //we can find the element by a placeholder , we have giving delay of 0.2 sec to enter a characters in input field 
    await page.locator('input[name="password"]').type("admin123",{delay:100});  // we can find the element by a css selector,we have giving delay of 0.1 sec to enter a characters in input field
    await page.locator("//button[@type='submit']").click(); // we can find the element by a x path, its starts with double slash
    await page.waitForTimeout(5000);  //its not recommended, it will wait for 5 sec
    await expect(page).toHaveURL(/dashboard/);// we can give complete url or a pattern starting /and at ending /
    await page.getByAltText("profile picture").first().click(); // we can access the image by alt attrribute also,first element, because there are two elements with same alt text, so there is getByAltText() 
    await page.getByText("Logout").click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/login/);
})