import { divide } from "./index.js"
if (divide("<p>test</p><b>test </b>") === []) throw new Error ("Test failed, no results") 
console.log(divide("<p>test</p><b>test </b>"))
