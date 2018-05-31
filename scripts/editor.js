/*
	 Main javascript architecture
	 */


// import CodeMirror from 'https://unpkg.com/codemirror'

console.log('Internet4000Home is running');

const documentation  = `** web-scratch-buffer **
Home of an empty page.
https://github.com/hugurp/home`

/* This is a new \`C-t\` like feature, \`C-e\`.
		 \`C-e\` opens to a new scratch buffer page
 * in which you can write anything.*/

const element = document.querySelector('.Editor')
const editor = CodeMirror(element, {
	value: documentation,
	mode:  "javascript"
});

export default editor

