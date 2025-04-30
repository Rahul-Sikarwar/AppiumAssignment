const AddNoteScreen = require("../../screenobjects/androidnew/add-note.screen");

describe('Add Notes', () => {
    it('skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    });

    it('add a note', async () => {

    await AddNoteScreen.addNoteText.click();
        
    await AddNoteScreen.addText.click();
                
    await expect(AddNoteScreen.editingText).toBeDisplayed();
        
    await AddNoteScreen.noteHeader.setValue("Favorite List");
        
    await AddNoteScreen.noteBody.setValue("Naruto\nOnePiece\nAoT");
        
    await AddNoteScreen.backButton.click();
        
    await expect(AddNoteScreen.editButton).toBeDisplayed();
                
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAoT");
    });

});