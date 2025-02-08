const {expect}=require("@playwright/test"); //we have imported the expect from playwright
class HomePage{
    constructor(page){
        this.page=page;
        this.manageoption="//span[normalize-space()='Manage']"; //manage button is visible on home page, so we have methion the x path to the manageoption variable, we can give any varibale name
        this.menu="//img[@alt='menu']"  // here we have assigned the x path of the menu image to the menu varibale, we can give any variable name
        this.logoutoption="button[normalize-space()='Sign out']" //  // here we have assigned the x path of the signout link to the signoutoption variabe, we can give any variable name
      }

      async verifyManageOption(){  // this method will check whether manage option is present or not
        await expect(this.page.locator(this.manageoption)).toBeVisible(); //first we will simply locate the manage element is visible/ present or not by using the locator() method
        
    }
      async logoutFromApplication(){
        await this.page.click(this.menu); //It will click on the menu image
        await this.page.click(this.logoutoption); //It will click on the logout option
      }
}

module.exports=HomePage;  //we have exported the class