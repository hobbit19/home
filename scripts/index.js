/*
   Main javascript architecture
 */

(function Internet4000Home(){

  console.log('Internet4000Home is running');
  
  const documentation  = `
** web-scratch-buffer **
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
  const TerminalApp = function(element) {
    const terminal = new Terminal();
    terminal.open(element);
    terminal.write('**scratch**');
    return terminal;
  }

  const codeMirrors = document.querySelectorAll('.App-codeMirror');
  const terminals = document.querySelectorAll('.App-terminal');

  console.log('codeMirrors', codeMirrors)
  console.log('terminals', terminals)
  
  if(codeMirrors.length) {
    [...codeMirrors].map(CodeMirrorApp)
  }

  if(terminals.length) {
    [...terminals].map(TerminalApp)
  }
})()
