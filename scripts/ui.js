import editor from './editor.js'
import storage from './storage.js'
import remoteStorage from './storage.js'

function saveNote() {
	const value = editor.getValue()
	remoteStorage.notes.add(value)
}

function openNotes() {
	const client = storage.scope('/notes/')
	client.getAll()
		.then(notes => {
			console.log(notes)
			var ids = Object.keys(notes)
			var value = ids.join('\n\n')
			console.log(ids, value)
			editor.setValue(value)
		})
}

// function saveNote() {
// 	const value = editor.getValue()
// 	remoteStorage.notes.add(value)
// }
//
export default {
	openNotes,
	saveNote
}
