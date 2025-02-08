const {test,expect}=require("@playwright/test");
test("Handle auto suggessions", async function({page}){
   await page.goto("https://www.google.com");
   await page.locator("textarea[name='q']").type("Mukesh Otwani");
   await page.waitForSelector("//li[@role='presentation']");  //It will wait untill all the suggestion (hidden and visible options also) will not visible 
  const elements=await page.$$( "//li[@role='presentation']");  //It will return the matching elements in an array , if matching elements not found then it will return empty array   
  for(let i=0;i<elements.length;i++){
    const text= await elements[i].textContent();
  if(text.includes(“youtube”)){    //It will check whether the text content includes “youtube” or not 
    await elements[i].click();      //It will click on that element.
    break;    //It will break the loop, i.e after clicking the element loop will break
}
}
})
