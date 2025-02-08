const {test,expect}=require("@playwright/test");
const LoginPage=require('../allure-report/pages/loginpage'); // here we have imported the LoginPage class
const HomePage=require("../allure-report/pages/homepage"); //here we have imported the HomePage class
test('Login to applicatoion using POM',async ({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    const loginPage=new LoginPage(page)  //we are calling the constructor and passing the page,and stored in a variable, so now the variable is behave like an object,and by using the object we can access the properties and methods of that class, this page is isolated page instance, created for each test , Pages are isolated between tests due to fixures,context isolation,this is the most common fixure used in the tests,  we are callin the constructor to create an object of the created class.
    // await LoginPage.loginToApplication(); //we have called the method which we have created inside the class
    //                                 // and by using the object i.e  loginPage , of that class, we can
    //                                 //access the properties and methods of that class
    await LoginPage.loginToApplication("admin@email.com","admin@123"); //we have called the method which we have created inside the class
                                    //  and we have passed the arguments which will received by user and pass parameters, and set
                                    //at the username and password fields

    const homePage=new HomePage(page); // we have created a new object of HomePage class, and assign it in a variable homePage, now its behaves as an object, and it can access the methods and properties of that class
    await homePage.verifyManageOption(); // we have called the method to verify the manage option by using the homepage object
    await homePage.logoutFromApplication(); // we have called the method by using the object, it will logged out from the application
    await loginPage.verifySignIn(); // Here we are varifying the Sign In text is visible or not by calling the varifySignIn() method, which is defined in loginpage.js file 
    


})