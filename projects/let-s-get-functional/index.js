// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

function maleCount(customers) {
    const maleCustomers = customers.filter(customer => customer.gender === 'male');

    
    return maleCustomers.length;
  }
  
  
  const count = maleCount(customerArray);
  console.log(count);
   
    
    
  function femaleCount(customers) {
    const femaleCustomers = customers.filter(customer => customer.gender === 'female');
    return femaleCustomers.length;
  }

  const count1 = femaleCount(customerArray);
  console.log(count1);

  
   


function oldestCustomer(customers) {
    
    if (!customers || customers.length === 0) {
      return ""; 
    }
  
    let oldestPerson = customers[0]; 
  
    
    for (let i = 1; i < customers.length; i++) {
      const currentPerson = customers[i];
      if (currentPerson.age > oldestPerson.age) {
        oldestPerson = currentPerson; 
      }
    }
  
    
    return oldestPerson.name;
  };
    

var youngestCustomer;
function youngestCustomer(customers) {
    
    if (!customers || customers.length === 0) {
      return "";
    }
  
    let youngestAge = Infinity;
    let youngestName = "";
  
    for (const customer of customers) {
      
      if (customer.age < youngestAge) {
        youngestAge = customer.age;
        youngestName = customer.name; 
      }
    }
  
    return youngestName;
  }
var averageBalance;
function averageBalance(customers) {
    // Check if the customers array is empty to avoid division by zero.
    if (customers.length === 0) {
      return 0;
    }
  
    // Calculate the sum of all customer balances.
    const totalBalance = customers.reduce((sum, customer) => {
      // Assuming each customer object has a 'balance' property.
      return sum + customer.balance;
    }, 0);
  
    // Divide the total balance by the number of customers to find the average.
    const average = totalBalance / customers.length;
  
    return average;
  }
  
   

var firstLetterCount;
const firstLetterCount = (customers, letter) => {
    // Convert the input letter to lowercase once for case-insensitive comparison
    const lowerCaseLetter = letter.toLowerCase();
    let count = 0;
  
    for (let i = 0; i < customers.length; i++) {
      const customerName = customers[i];
  
      // Check if the name is a non-empty string before accessing the first character
      if (typeof customerName === 'string' && customerName.length > 0) {
        // Get the first character of the name and convert it to lowercase
        const firstChar = customerName[0].toLowerCase();
  
        // Compare the lowercase first character with the lowercase input letter
        if (firstChar === lowerCaseLetter) {
          count++;
        }
      }
    }
  
    return count;
  };
  
    
var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
