import { $, $$, expect, driver } from "@wdio/globals";


describe('Delete note', () => {
    it('skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note & verify', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //await expect($('android.widget.FrameLayout')).click();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Favorite List");

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Naruto\nOnePiece\nAoT");

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click();

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAoT");
    });

    it('delete note & check in trash', async () => {

        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click();
        await driver.back();

        const textNote = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        await $('~More').click();

        await $('//*[@text="Delete"]').click();

        await driver.acceptAlert();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        await $('//*[@text="Trash Can"]').click();

        const trashItem= await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');

        await expect(trashItem).toHaveText(textNote);

    
    });

});