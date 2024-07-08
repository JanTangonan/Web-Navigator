const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Current Page';

// ------------------------------
// Helper Functions
// ------------------------------
newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  
  // clear the nextPages stack
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("NEW: ");
}

backPage = () => {
  nextPage.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
}

nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
}

showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
}


/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false;

this.showCurrentPage();
while (finish) {
  let instructions = baseInfo;
  if (!backPages.isEmpty()){
    instructions += backInfo + ', ';
    showBack = true;
  } else {
    showBack = false;
  }

  if (!nextPages.isEmpty()) {
    instructions += nextInfo + ', ';
    showNext = true;
  } else {
    showNext = false;
  }

  instructions += quitInfo  + ', '
  console.log(instructions)
}
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  