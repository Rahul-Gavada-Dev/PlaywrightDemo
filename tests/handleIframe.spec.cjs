const{test,expect}=require("@playwright/test");
test("handle iframe",async function({page}){
   await page.goto("https://docs.oracle.com/javase/8/docs/api/")
   const iframe=await page.frameLocator("//frame[@name='packageListFrame']"); //Basically it is to entering into that frame, The method frameLocator() will find out the frame and it will return that frame
   await iframe.locator("//a[text()='java.applet']").click(); //It will find the element and perform click action on that element
   await page.pause();  //I will open the playwright inspector window and pause the inspector screen so we can see the output, and then once we click on resume button on inspector window the script will not close the browser window 

})