const {test,expect}=require('@playwright/test');
test("Select drop down",async function({page}){
    await page.goto("https://testautomationpractice.blogspot.com");
    //there are multiple ways to select options from the dropdown, first two ways are famouse
    // 1st approach
    // await page.locator("#country").selectOption({label:'India'}) // we have selected the <select> element and in that we have selected the <option></option>, label or visible text we have used.
    //2nd approach
    // await page.locator("#country").selectOption('India');  //Here we have directely wrote the option,i.e visible text we have used
    //3rd approach
    // await page.locator("#country").selectOption({value:'india'}); // Here we are selecting the option by providing the value attribute
    //4th approach
    // await page.locator("#country").selectOption({index:9}); // Here we are selecting the option by providing the index, its starts with zero
    //5th approach
    // await page.selectOption("#country",'India'); // We can call directly use the selectOption() method by page object, we have to pass two parameters , 1st is the drop down element and second is the value , i.e by text

    //Now we will see the assertions
    //1st - how many options are available in the dropdown
    // const options=await page.locator('#country option'); // inside locator method we have passed the selector id and option keyword, so it will return all the options, we have stored them in a variable
    // await expect(options).toHaveCount(10); // we are expecting total number of options should be 10
    //2nd- how many options are available in the dropdown
    // const options=await page.$$('#country option');
    // console.log("Total number of options are",options.length);
    // }

    //3rd- check specific option is present or not by using includes() method
    // const content=await page.locator("#country").textContent()
    // expect(content.includes('India')).toBeTruthy();

    //4th -check specific option is present or not by using looping statement
    //   const options=await page.$$('#country option');
    //   let status=false; // first we have make false, once the option gets found we will make it true
    //   for(const option of options){  //for of loop; inside option variable, option is basically a web element, one by one all the options will come
    //     //  console.log(await option.textContent()); // inside the option web element we are extrcating the text content
    //     let value=await option.textContent(); // we have stored the text content of option in a variable
    //     if(value.includes("India")){
    //        status=true;               // if "India" value found then we have made status as true, and then we have break the loop, because we dont need to check further 
    //        break;
    //     }

    //   }
    //     expect(status).toBeTruthy();  // after complition of for loop we are expecting the status should be truthy

        //5) select option from drop down using loop
//         const options=await page.$$('#country option');
//         for(const option of options){
//           let value=await option.textContent(); // we have stored the text content of option in a variable
//           if(value.includes("India")){
//              await page.selectOption("#country",value); // here we are selecting the option from the drop down
//              break;
//           }
  
//         }

// })

// const options = await page.$$('#country option');
// let value;
// for (const option of options) {
//   value=await option.textContent(); // Get the option text content
//   if (value.includes("India")) {
//     await page.selectOption("#country", value); // Select option from drop-down
//     break; // Exit loop after selecting
//   }
// }
// })
const options = await page.$$('#country option');
let value;
for (const option of options) {
  value = option.evaluate(option => option.textContent); // Use evaluate to get text content
  if (value.value("India")) {
    await page.selectOption("#country", option.value); // Use the option's value for selection
    break; // Exit loop after selecting
  }
}
})