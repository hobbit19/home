import editor from './editor.js'
import remoteStorage from './storage.js'

function saveNote() {
	const value = editor.getValue()
	remoteStorage.notes.add(value)
}

// function saveNote() {
// 	const value = editor.getValue()
// 	remoteStorage.notes.add(value)
// }
//
export default {
	saveNote
}
