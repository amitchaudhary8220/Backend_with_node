//every file is module
//modules encapsulated code (only share minimum)
const names=require('./4-names');
const sayHii=require('./5-util')  //here we can give different name since it not names export
const data=require('./6-alternative-export-way')
require('./7-mind');   //when we import a module , its function would be called , if there would be any

// console.log('data is',data);
// sayHii(names.ankit);
// sayHii(names.shivam);






