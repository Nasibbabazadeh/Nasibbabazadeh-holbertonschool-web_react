//task : 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  
    location: string;
    [key: string]: any;
  }
//task : 2 
  interface Directors  extends Teacher {
    numberOfReports : number
  }
// task : 3
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  // task : 4
  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }