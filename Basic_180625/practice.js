const student={  //objects 
    name:"Tanisha", //key:value
    age:20,
    course:"Btech",
    cgpa:7.8,
    isPass:true,
};
student["name"]="Tanisha Gupta"
console.log(student);  //this will print key value pairs
console.log(typeof(student))  //this typeof will tell the datatype of variable
console.log(student["age"]);  //this will print the particular value of age  
console.log(typeof(student["age"])); //this will print the type of particular variable
console.log(student["name"]);