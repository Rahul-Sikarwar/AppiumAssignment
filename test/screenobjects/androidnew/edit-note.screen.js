//const AddNoteScreen = import("../../screenobjects/androidnew/add-note.screen").default;

import AddNoteScreen from '../../screenobjects/androidnew/add-note.screen';

class EditNoteScreen{

    get screenTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreBtn(){
        return $('~More');
    }

    get deleteBtn(){
        return $('//*[@text="Delete"]');
    }

    get iconNav(){
       return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCan(){
        return $('//*[@text="Trash Can"]');
    }


    async skipTutorial(){
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody) {
    
        await AddNoteScreen.addNoteText.click();
                
        await AddNoteScreen.addText.click();
                        
        await expect(AddNoteScreen.editingText).toBeDisplayed();
                
        await AddNoteScreen.noteHeader.setValue(noteHeading);
                                
        await AddNoteScreen.noteBody.setValue(noteBody);
                
        await AddNoteScreen.backButton.click();
                
        await expect(AddNoteScreen.editButton).toBeDisplayed();
                        
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAoT");
    }

    

}

export default new EditNoteScreen();
//export default new EditNoteScreen