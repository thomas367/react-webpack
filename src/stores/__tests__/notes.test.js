import GlobalStore from 'stores/index';
import NotesStore from 'stores/notes';

let notesStore;

describe('Notes Store', () => {
    beforeEach(() => {
        notesStore = new NotesStore(GlobalStore);
    });

    afterEach(() => {
        notesStore = null;
    });

    test('should create notes store successfully', () => {
        expect(notesStore).toBeInstanceOf(NotesStore);
    });

    test('should set text', () => {
        const note = 'randomText';
        notesStore.setText(note);
        expect(notesStore.text).toEqual('randomText');
    });
});
