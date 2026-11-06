
require('datejs');

function combineUsers(...args) {
  // Step 2: the object we'll return
  const combinedObject = {
    users: [],
  };

  // Step 3: loop through each array in args
  for (const userArray of args) {
    // Step 4: spread each array into the users array
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  // Step 5: add today's date as M/d/yyyy
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: return the object
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};