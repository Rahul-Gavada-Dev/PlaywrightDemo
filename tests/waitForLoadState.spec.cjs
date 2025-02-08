const {test,expect}=require("@playwright/test");
test("wait for load",async function({page}){
    page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByText("New user? Signup").click();
    const count=await page.locator("//input[@type='checkbox']").count();
    expect(count).toBe(6);

})