//const EditNoteScreen = import("../../screenobjects/androidnew/edit-note.screen").default;

import EditNoteScreen from '../../screenobjects/androidnew/edit-note.screen';

describe('Delete note', () => {

    it('Delete note & check in trash', async () => {

        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("Favorite List","Naruto\nOnePiece\nAoT");

        //await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]').click();
        await driver.back();

        const textNote = await EditNoteScreen.screenTitle.getText();

        await EditNoteScreen.screenTitle.click();

        await EditNoteScreen.moreBtn.click();

        await EditNoteScreen.deleteBtn.click();

        await driver.acceptAlert();

        await EditNoteScreen.iconNav.click();

        await EditNoteScreen.trashCan.click();

        const trashItem= await EditNoteScreen.screenTitle;

        await expect(trashItem).toHaveText(textNote);

    
    });

});