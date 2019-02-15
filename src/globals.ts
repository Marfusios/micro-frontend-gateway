export const externals = [
  'ace-builds/src-noconflict/ace',
  'ace-builds/src-noconflict/theme-chrome',
  'ace-builds/src-noconflict/mode-html.js',
  'ace-builds/src-noconflict/mode-sql.js',
  'froala-editor/js/froala_editor.min.js',
];

// function loadExternals() {
//   const loadPromises: any[] = [];
//   externals.forEach(script => loadPromises.push(loadScript(script)));

//   return Promise.all(loadPromises);
// }

// function loadScript(path: string) {
//   return new Promise((resolve, reject) => {
//       // if (this.scripts[name].loaded) {
//       //     resolve({script: name, loaded: true, status: 'Already Loaded'});
//       // } else {
//       const script = document.createElement('script') as any;
//       script.type = 'text/javascript';
//       script.src = path;

//       script.onload = () => {
//         resolve({ script: name, loaded: true, status: 'Loaded' });
//       };

//       script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
//       document.getElementsByTagName('head')[0].appendChild(script);
//       // }
//   });
// }

// loadExternals();


// const ace = require('ace-builds/src-noconflict/ace');
// console.log(ace);
// import 'ace-builds/src-noconflict/theme-chrome';
// import 'ace-builds/src-noconflict/mode-html.js';
// import 'ace-builds/src-noconflict/mode-sql.js';

// console.log('froala');
// const froala = require('froala-editor/js/froala_editor.min.js');
// console.log(froala);
