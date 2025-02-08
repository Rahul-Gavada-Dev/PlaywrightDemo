const {test,expect}=require('@playwright/test');

test("handle multiselect drop down",async function({page}){
    await page.goto("https://testautomationpractice.blogspot.com");
    await page.selectOption("#colors",['Blue','Red','Yellow']); // selectOption(locator,[options])

    //Assertions
    //1) Check number of options in the drop down
    // const options=await page.locator('#colors option');
    // expect(options).toHaveCount(5); // we are expecting the total number of options should be 5

    //2) check number of options in the drop down by using the JS array
    // const options=await page.$$('#colors option'); //$$() function returns in the form of array
    // expect(options.length).toBe(5); //we are expecting the total number of options should be 5

    //3)check presence of option in the drop down
    const content=await page.locator('#colors').textContent(); // textContent() method extract the text from the element
    await expect(content.includes('Blue')).toBeTruthy(); // It checks whether Blue is present or not in the drop down list, we are expecting it should be truthy.


    await page.waitForTimeout(5000);
  

})