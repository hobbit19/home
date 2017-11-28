/*
   Main javscript architecture
 */



(function Internet4000Home(){

  console.log('Internet4000Home is running');
  
  const documentation  = `
** web-scratch-buffer **
https://github.com/hugurp/home
Home of an empty page.

This is a new \`C-t\` like feature, \`C-e\`.
\`C-e\` opens to a new scratch buffer page
in which you can write anything.

# Install 
- [ ] define how to bind \`C-e\` to new web-scratch-buffer

# Future 
- [ ] find how to bind the opening new-web-buffer
- [ ] menu to chose terminal preferences
- [ ] define preferences, what can be customized
- [ ] save these preferences localy
- [ ] save to local memory?
- [ ] save to Github?
- [ ] save to Google Drive {.txt,.org.md}?
- [ ] save to disk?
- [x] create index.{html.css} to display empty codemirror.
- [x] insert this message?
- [ ] check https://github.com/remotestorage, how to store data?
- [ ] https://github.com/oskarrough/programmingfonts
- [ ] shared scratch buffer? public? duplicate data?
`

  const myCodeMirror = CodeMirror(document.body, {
    value: documentation,
    mode:  "javascript"
  });

})()
