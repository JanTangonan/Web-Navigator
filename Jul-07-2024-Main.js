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
const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  
  // clear the nextPages stack
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("NEW: ");
}

const backPage = () => {
  nextPage.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
}

const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
}

const showCurrentPage = (action) => {
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

showCurrentPage(default)
while (finish) {
  let instructions = baseInfo;
  if(!backPages.isEmpty()){
    instructions += backInfo + ',';
    showBack = true;
  } else {
    showBack = false;
  }

  if(!nextPages.isEmpty()){
    instructions += nextInfo + ',';
    showNext = true;
  } else {
    showBack = false;
  }

  instructions += quitInfo;
  console.log(instructions)

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  const answer = prompt(question)
  let lowerCaseAnswer = answer.toLowerCase();

  if ((lowerCaseAnswer !== 'b') && 
      (lowerCaseAnswer !== 'n') &&
      (lowerCaseAnswer !== 'q')) {
        newPage(answer);
  } else if ((lowerCaseAnswer === 'b') &&
             (showBack === true)) {
    backPage();
  } else if ((lowerCaseAnswer === 'n') &&
             (showNext === true)) {
    nextPage();
  }
  

}

  
