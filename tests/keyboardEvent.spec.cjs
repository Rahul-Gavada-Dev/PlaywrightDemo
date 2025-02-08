const {test,expect}=require('@playwright/test');
test("Keyboard events",async function({page}){
await page.goto("https://www.google.com");
await page.locator("textarea[name='q']").focus();  //It will focus on the text area where we search text area
await page.keyboard.type(“Mukesh Otwani”); //It will type “Mukesh Otwani” into the search box, and now focus is after i of Otwani   i.e OtwaniI   // yellow highlighted is a focus
await page.keyboard.press(“ArrowLeft”); //It will focus after n of otwani and before i of otwani  i.e otwanIi     // yellow highlighted is a focus , because it’s a Arrow left
await page.keyboard.down(“Shift”);   // down means we are pressing it and we are not releasing it, because we select text by shift+Arrow left so specific text gets selected 
for(let i=0;i<6;i++){
await page.keyboard.press(“ArrowLeft”);
}
await page.keyboard.up(“Shift”); //up mease we are releasing the shift key
await page.keyboard,press(“Backspace”);  //It will do clear the selected text

})
