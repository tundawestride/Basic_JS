let text = "   Hello World   ";
//trim
console.log(text.trim());

let movie_name = "Spiderman no way home";
//split
console.log(movie_name.split(" "));
console.log(movie_name.split(" ")[1]);

let movie2_name = "spiderman,no,way,home";
console.log(movie2_name.split(","));

//repeat
console.log(movie_name.repeat(3));

//replace                      source,destination
console.log(movie_name.replace("man", "girl"));

//startWith check which is beginning with... result bulene
console.log(movie_name.startsWith("spider"));

//includes check which is including with... result bulene
console.log(movie_name.includes("home"))

//upper case
console.log(movie_name.toUpperCase())

//lower case 
console.log(movie_name.toLowerCase())

//substring cut the text by position (start,end)
console.log(movie_name.substring(6, 9))