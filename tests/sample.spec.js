const {test,expect}=require('@playwright/test');  /*test() and expect() bith are functions which we have destructure,and stored in an object from playwrite/test module */
                                                
test("My first test",async function({page}){     /* first argument is test name in a string, second argument is a async function which receives an object called page,this page object is, Isolated Page instance, created for each test. Pages are isolated between tests due to fixtures.context isolation.This is the most common fixture used in a test. This page instance/object has all the methods to automate our application*/
          expect(12).toBe(12);                   /* expect() function is to use for assertion, here we are expectiing 12 should be 12 so it will be pass */                            
})
test("My second test",async function({page}){
         expect(100).toBe(101);                 /* this test is going to fail because we are expecting 100 should be equal to 101, so its false */
})
test("My third test",async function({page}){
        expect(2.2).toBe(2.2);
})
test('My fourth test',async function({page}){
    expect("Rahul Gavada").toContain("Rahul");
} )
test.skip("My fifth test", async function({page}){
    expect("Rahul Gavada").toEqual("Gavada Rahul");   /* this test is going to fail because we are checking Rahul Gavada is equal to Gavada Rahul, so its false */
})
test("My sixth test",async function({page}){
    expect(true).toBeTruthy();
} )
test("My eighth test",async function({page}){
    expect("Rahul Gavada").includes("Gavada").toBeFalsy(); // here we are chacking whether Rahul Gavada includes , Gavada, its true , but we are saying it's should be false, so this test case will fail.
})