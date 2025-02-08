const {expect}=require("@playwright/test"); //Here we have imported the expect object from playwright
class Loginpage{
    constructor(page){       //constructor is a function only which is used to create object
                             // page argument will be comming from our test cases.
    this.page=page;          // we required page for this class also , so we have created a page and assign page which we get 
                             //from the test cases.
    this.header="//h2[normalize-space()='Sign In']"; //Here we have created a variable called header, we can give any name,and assign the x path
    this.username="#email1"; // we have created a variable called username, we can give any name and assign the id which we inspect for username field
    this.password="//input[@placeholder='Enter Password']"; // we have created a variable called password, we can give any name and assigned the xpath which we inspect for password field
    this.loginButton="//button[text()='Sign in']" // we have created a varible called loginButton, we can give any name and assigned a x path which we inspect for sign in button
    
    }

    // async loginToApplication(){
    //     await this.page.fill(this.username,"admin@email.com");  //first argument is the locator, second argument is the value to enter
    //     await this.page.fill(this.password,"admin@123"); //first argument is the locator, second argument is the value to enter
    //     await this.page.click(this.loginButton);  // argument is the locator i.e on which element to click
    // }

    async loginToApplication(user,pass){
        await this.page.fill(this.username,user);  // we have passed the parameters as a second argument
        await this.page.fill(this.password,pass); // we have passed the parameters as a second argument
        await this.page.click(this.loginButton);  // argument is the locator i.e on which element to click
    }


    async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible(); // We are expecting the header element should be visible on the page
    }                                                               //locator() method used to locate the element 

}
module.exports=Loginpage;   //we have exported the class so somewhere it will get imported
