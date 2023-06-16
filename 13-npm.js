// npm init - (step by step)
//npm init y (set everything bydefault)

 // what will happen when we don't push node_modules folder to github (since it is very large ) and somebody clone our project then it will not work 
 //when we clone any node project form github , we first install npm  like - npm install

//npm will check for the dependencies that are in the package.json and install then  -- then our project will work fine
 

//dev dependency -- dependency which we want during development only, they don't reqire in production

//can be install in two way  npm install (module name ) -D or --save-dev

//inside script we can setup commands

//two ways to uninstall the dependencies

// npm uninstall (package name)

//directly delete from package.json and delete package-lock.json and node_modules 
//and reinstall like npm install



//to run any file using nodemon filename --- then install nodemonl globally