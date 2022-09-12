/**
 * truthy
 * 1. true
 * 2. any number (positive or negative accept 0)
 * 3. any string accept empty string ('0', 'false')
 * 4. objects including empty objects
 * 5. array including empty array
 * 
 * falsy
 * 1. false
 * 2. 0
 * 3. empty string and empty string with space
 * 4. undefined
 * 5. null
 */

const x = false;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsly
const y = null;
if (!y){
    console.log('value is falsy')
}

//check true
const z = ''
if(!!x){
    console.log('value is truthy')
}