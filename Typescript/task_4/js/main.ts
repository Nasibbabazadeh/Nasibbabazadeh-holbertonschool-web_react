const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

let cTeacher = {
  firstName: 'Javad',
  lastName: 'Javadov',
  experienceTeachingC: 3,
};

cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

export { cpp, java, react, cTeacher };
