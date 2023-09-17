function introduction(name){ 
  if(name === "Aki"){
  console.log(`'Hi, my name is ${name}.'`);
} else if(name === "Samip"){
  return `Hi, my name is ${name}.`}
};
console.log(introduction("Aki"));

function introductionWithLanguage(name, language){ 
  if(name, language === "Aki", "Ember.js"){
  console.log(`"Hi, my name is Aki and I am learning to program in Ember.js."`);
} else if(name, language === "Samip", "React"){
  return `"Hi, my name is Samip and I am learning to program in React."`}
};
console.log(introductionWithLanguage("Aki","Ember.js"));

// function introductionWithLanguage(name,language){
//   console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
//   return `${name}, ${language}`;
// };
// introductionWithLanguage("Aki","Ember.js")


// function introductionWithLanguage(name, language){
//   console.log ('Hi,my name is $(name) and I am learning to program in $(language).');
// };

function introductionWithLanguageOptional(name,language = "Javascript"){
console.log(`"Hi, my ${name} is  and I am learning to program in ${language}."`)
return `${name}, ${language}`;
}
introductionWithLanguageOptional("Gracie")
