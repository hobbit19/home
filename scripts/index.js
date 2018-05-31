/*
	 Main javascript architecture
	 */


console.log('Internet4000Home is running');

const documentation  = `** web-scratch-buffer **
Home of an empty page.
https://github.com/hugurp/home`

/* This is a new \`C-t\` like feature, \`C-e\`.
		 \`C-e\` opens to a new scratch buffer page
 * in which you can write anything.*/

const CodeMirrorApp = function(element) {
	return CodeMirror(element, {
		value: documentation,
		mode:  "javascript"
	});
}

const codeMirrors = document.querySelectorAll('.App-codeMirror');
let instances

console.log('codeMirrors', codeMirrors)

if(codeMirrors.length) {
	instances = [...codeMirrors].map(CodeMirrorApp)
}

