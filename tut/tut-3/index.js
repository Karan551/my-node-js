// import { format } from "date-fns";


const { format } = require("date-fns");

const { v4, v1,v7 } = require("uuid");

console.log(format(new Date(), "dd-MM-yyyy\tHH:MM:SS"));

console.log(v4());
console.log(v7());