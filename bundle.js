(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  /*
     Main javascript architecture
   */

  const main = function Internet4000Home(){

    console.log('Internet4000Home is running');
    
    const documentation  = `** web-scratch-buffer **
Home of an empty page.
https://github.com/hugurp/home`;

    /* This is a new \`C-t\` like feature, \`C-e\`.
       \`C-e\` opens to a new scratch buffer page
     * in which you can write anything.*/

    const CodeMirrorApp = function(element) {
      return CodeMirror(element, {
        value: documentation,
        mode:  "javascript"
      });
    };
    
    const codeMirrors = document.querySelectorAll('.App-codeMirror');

    console.log('codeMirrors', codeMirrors);
    
    if(codeMirrors.length) {
      [...codeMirrors].map(CodeMirrorApp);
    }
  };

  main();

})));
