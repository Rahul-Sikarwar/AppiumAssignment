import { clear } from "appium-uiautomator2-driver/build/lib/commands/element";

describe('Android Elements Tests', () => {
    
    it('Find element by accessibility id', async () =>{
// find element by accesssibility id
        const appOption = await $('~App');
// click on element
        await appOption.click();
//assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async() =>{
        const className= await $('android.widget.TextView');
        console.log(await className.getText());
        await expect(className).toHaveText("API Demos");
    })

    it('Find element by xpath', async() =>{
// 
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
})

    it('Find multiple elements', async() =>{
      const expectedList = [
        'API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 'Content', 'Graphics', 'Media', 'NFC', 
        'OS', 'Preference', 'Text', 'Views'
      ]

      const actualList = []
     //find multiple elements
       
    const textList= await $$('android.widget.TextView');
    // loop 

    for(const element of textList){
        actualList.push(await element.getText());
    }
    // assertion
    await expect(actualList).toEqual(expectedList);
})

})
