// // Get Slider Items | Array.from [ES6 Feature]
// let slideImages = Array.from(document.querySelectorAll('.slider-container img'));

// // Get Number Of Slides
// let slideCount = slideImages.length;

// // Set Current Slide
// let currentSlide = 1;

// // Slide Number String Element
// let slideNumberElement = document.getElementById('slide-number');

// // Previous and Next Button
// let nextButton = document.getElementById('next');
// let prevButton = document.getElementById('prev');

// // Handle Click on Previous and Next Buttons
// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;

// // Create The Main Ul Element
// let paginationElement = document.createElement('ul');

// // Set ID On Created Ul Element
// paginationElement.setAttribute('id', 'pagination-ul');

// // Create List Items Based Slides Count
// for (let i = 1; i <= slideCount; i++) {
//     // Create The LI
//     let paginationItem = document.createElement('li');

//     // Set Custon Attribute
//     paginationItem.setAttribute('data-index', i);

//     // Set Item Content
//     paginationItem.appendChild(document.createTextNode(i));

//     // Append Items to The Main Ul List
//     paginationElement.appendChild(paginationItem);
// }

// document.getElementById('indicators').appendChild(paginationElement);

// // Get The New Created UL
// let paginationCreatedUl = document.getElementById('pagination-ul');

// // Get Padination Items | Array.from [ES6 Feature]
// let PaginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// // Loop Through All Bullets Items
// for (let i = 0; i < PaginationBullets.length; i++) {
//     PaginationBullets[i].onclick = function () {
//         currentSlide = parseInt(this.getAttribute('data-index'));
//         theChecker();
//     }
// }

// // Trigger The Checker Function
// theChecker()

// // Next Slide Function
// function nextSlide() {
//     if (nextButton.classList.contains('disabled')) {
//         // Do Nothing
//         return false
//     } else {
//         currentSlide++;
//         theChecker();
//     }
// }

// // Previous Slide Function
// function prevSlide() {
//     if (prevButton.classList.contains('disabled')) {
//         // Do Nothing
//         return false
//     } else {
//         currentSlide--;
//         theChecker();
//     }
// }

// // Create The Cheacker Function
// function theChecker() {

// }

// // Create The Checker Function
// function theChecker() {
//     // Set The Slide Number
//     slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' Of ' + (slideCount);

//     // Remove All Active Classes
//     removeAllActive()

//     // Set Active Class On Current Slide
//     slideImages[currentSlide - 1].classList.add('active');

//     // Set Active Class on Current Pagination Item
//     paginationCreatedUl.children[currentSlide - 1].classList.add('active');

//     // Cheack If Current Slide Is The First
//     if (currentSlide == 1) {
//         // Add Disabled Class on Previous Button
//         prevButton.classList.add('disabled');
//     } else {
//         // Remove Disabled Class From Previous Button
//         prevButton.classList.remove('disabled');
//     }

//     // Cheack If Current Slide Is The Last
//     if (currentSlide == slideCount) {
//         // Add Disabled Class on Next Button
//         nextButton.classList.add('disabled');
//     } else {
//         // Remove Disabled Class From Next Button
//         nextButton.classList.remove('disabled');
//     }
// };

// // Remove All Acive Classes From Images and Pagination Bullets
// function removeAllActive() {
//     // Loop Through Images
//     slideImages.forEach(function (img) {
//         img.classList.remove('active');
//     });

//     // Loop Through Pagination Bullets
//     PaginationBullets.forEach(function (bullet) {
//         bullet.classList.remove('active')
//     });
// }
// --------------------------------------------------------------
//////////////////////////
// Create Memory Game ////
//////////////////////////
// // Select The Start Game Button
// document.querySelector('.control-buttons span').onclick = function () {

//     // Prompt Window To Ask For Name
//     let yourName = prompt('Whats Your Name');

//     // If Name Is Empty
//     if (yourName == null || yourName == '') {

//         // Set Name To Unknown
//         document.querySelector('.name span').innerHTML = 'unknown';

//         // Name Is Not Empty
//     } else {

//         // Set Name To Your Name
//         document.querySelector('.name span').innerHTML = yourName;
//     }

//     // Remove Splash Screen
//     document.querySelector('.control-buttons').remove();
// }

// // Effect Duration
// let duration = 1000;

// // Select Blocks Container
// let blocksContainer = document.querySelector('.memory-game-blocks');

// // Create Array From Game Blocks
// let blocks = Array.from(blocksContainer.children);

// // Create Range Of Keys
// let orderRange = [...Array(blocks.length).keys()]
// shuffle(orderRange)

// // Add Order Css Property To Game Blocks
// blocks.forEach((block, index) => {

//     // Add Css Order Property
//     block.style.order = orderRange[index];

//     // Add Click Event
//     block.addEventListener("click", function () {
//         // Trigger The Flip Block Function
//         flipBlock(block)
//     })
// });

// // Flip Block Function
// function flipBlock(selectedBlock) {
//     // Add Clas Is-flipped
//     selectedBlock.classList.add('is-flipped');

//     // Collected All Flipped Card
//     let AllFlippedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));

//     // If there is Two Selected Blocks
//     if (AllFlippedBlocks.length === 2) {

//         // Stop Clicking Function
//         stopClicking()

//         // Check Matched Block Function
//         checkMatchedBlock(AllFlippedBlocks[0], AllFlippedBlocks[1]);
//     }
// }

// // Check Matched Block
// function checkMatchedBlock(firstBlock, secondBlock) {
//     let triesElement = document.querySelector('.tries span');

//     if (firstBlock.dataset.game === secondBlock.dataset.game) {

//         firstBlock.classList.remove('is-flipped');
//         secondBlock.classList.remove('is-flipped');

//         firstBlock.classList.add('has-match');
//         secondBlock.classList.add('has-match');

//         document.getElementById('success').play();

//     } else {
//         triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

//         setTimeout(() => {

//             firstBlock.classList.remove('is-flipped');
//             secondBlock.classList.remove('is-flipped');

//         }, duration);

//         document.getElementById('fail').play();
//     }
// }



// // Shuffle Function
// function stopClicking() {
//     // Add Class No Clicking on main Container
//     blocksContainer.classList.add('no-clicking');

//     setTimeout(() => {
//         //Remove Class No Clicking After The Duration
//         blocksContainer.classList.remove('no-clicking');
//     }, duration);
// }

// // Shuffle Function

// function shuffle(array) {

//     // Setting Vars
//     let current = array.length,
//         temp,
//         random;

//     while (current > 0) {

//         // Get Random Number
//         random = Math.floor(Math.random() * current);

//         // Decrease Length By One
//         current--;

//         // [1] Save Current Element In Stash
//         temp = array[current];

//         // [2] Current Element = Random Element
//         array[current] = array[random];

//         // [3] Random Element = Get Element From Stash
//         array[random] = temp;
//     }
//     return array;
// }
// ------------------------------------------------------------------------------------------

////////////////////////////
//       Slide Copie    //
//////////////////////////
// let arrImg = Array.from(document.querySelectorAll('img'));

// let imgLength = arrImg.length;

// let currentSlide = 1;

// let slide = document.querySelector('.slide');

// let slideNum = document.querySelector("span.num");

// let prev = document.querySelector('.prev');
// let next = document.querySelector('.next');

// prev.onclick = nextButton;
// next.onclick = prevButton;

// let numsUl = document.createElement('ul');
// numsUl.setAttribute('id', 'num-ul')

// let ulElement = slideNum.appendChild(numsUl);

// for (let i = 0; i < arrImg.length; i++) {

//     let numsLi = document.createElement('li');

//     const textNode = document.createTextNode(i + 1);

//     numsLi.appendChild(textNode);

//     numsUl.appendChild(numsLi);
// };

// let getUl = document.getElementById('num-ul');

// let lis = Array.from(document.querySelectorAll('#num-ul li'));

// theChecker();

// function nextButton() {

//     currentSlide++;
//     theChecker()
// }

// function prevButton() {
//     console.log('hi')
// }

// function theChecker() {
//     slide.textContent = 'Slide #' + (currentSlide) + ' of ' + (imgLength);

//     // removeAllActive()

//     arrImg[currentSlide - 1].classList.add('active');

//     getUl.children[currentSlide - 1].classList.add('active');

//     if (currentSlide === 1) {
//         prev.classList.add('disabled');
//     } else {
//         prev.classList.remove('disabled');
//     }

//     if (currentSlide >= arrImg.length) {
//         next.classList.add('disabled');
//     } else {
//         next.classList.remove('disabled');
//     }
// }

// function removeAllActive() {

//     arrImg.forEach(img => {
//         img.classList.remove('active');

//     });

//     lis.forEach(nums => {
//         nums.classList.remove('active')
//     });
// }
// -----------------------------------------------------------------------------------------------------------------------------------

////////////////////////////
//      Game Copie       //
//////////////////////////

// let container = document.querySelector('.container');
// let nom = document.querySelector('.name');

// container.onclick = hi;
// function hi() {
//     let prmp = prompt("Please enter your name", '');

//     if (prmp.length > 0 || prmp !== null) {
//         nom.textContent = prmp;
//     } else {
//         nom.textContent = 'unknown';
//     }

//     nom.remove()
// }

// console.log(Math.floor(Math.random() * 20));
// --------------------------------------------------------------------------------------------------------------------------------

////////////////////////////
//      Game Copie       //
//////////////////////////

/*
    Students Tasks:
    [1] Use Sweet Alert If input Is Empty
    [2] Chek If Tasks Is Exist
    [3] Create Delete All Tasks Button
    [4] Create Finish All Tasks Button
    [5] Add Tasks To Local Storage
*/

// Setting Up Varaiables
// let theInput = document.querySelector('.add-task input');
// let theAddButton = document.querySelector('.add-task .plus');
// let tasksContainer = document.querySelector('.tasks-content');
// let tasksCount = document.querySelector('.tasks-count span');
// let tasksCompleted = document.querySelector('.tasks-completed span');

// // Focus On Input Field
// window.onload = function () {
//     theInput.focus();
// };

// // Adding The Task
// theAddButton.onclick = function () {

//     // If Input Is Empty
//     if (theInput.value === '') {

//         console.log('No Value')

//     } else {

//         let noTasksMsg = document.querySelector('.no-tasks-message');

//         if (document.body.contains(document.querySelector('.no-tasks-message'))) {
//             // Remove No Tasks Message
//             noTasksMsg.remove();
//         }

//         // let Create Span Main Element
//         let mainspan = document.createElement('span');

//         // Create Delete Button
//         let deleteElement = document.createElement('span');

//         // Create The Main Span Text
//         let text = document.createTextNode(theInput.value);

//         // Create The Delete Button Text
//         let deleteText = document.createTextNode('Delete');

//         // Add Text To Main Span
//         mainspan.appendChild(text);

//         // Add Class to Main Span
//         mainspan.className = 'task-box';

//         // Add Text To Delete Button
//         deleteElement.appendChild(deleteText);

//         // Add Class To Delete Button
//         deleteElement.className = 'delete';

//         // Add Delete Button to Main Span
//         mainspan.appendChild(deleteElement);

//         // Add The Task to The Container
//         tasksContainer.appendChild(mainspan);

//         // Calculate Tasks
//         calculateTasks();

//     }
// };

// document.addEventListener('click', function (e) {

//     // Delete task
//     if (e.target.className == 'delete') {

//         // Remove Current Task
//         e.target.parentNode.remove();

//         // Check Number Of Tasks Inside The Container
//         if (tasksContainer.childElementCount == 0) {

//             createNoTasks()

//         }
//     }
//     // Finish Task
//     if (e.target.classList.contains('task-box')) {

//         // toggle Class 'Finished'
//         e.target.classList.toggle('finished')
//     }

//     // Calculate Tasks
//     calculateTasks();
// })

// // Function To Create No Tasks Message
// function createNoTasks() {

//     // Create Message Span Element
//     let msgSpan = document.createElement('span');

//     // Create The Text Message
//     let msgText = document.createTextNode(('No Tasks To Show'));

//     // Add Text To Message Span Element
//     msgSpan.appendChild(msgText);

//     // Add Text To Message Span
//     msgSpan.className = 'no-tasks-message';

//     // Append The Message Span Element To The Task Container
//     tasksContainer.appendChild(msgSpan);

// }

// // Function To Calculate Tasks
// function calculateTasks() {

//     // Calculate All Tasks
//     tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

//     // Calculate Completed Tasks
//     tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;


// }

// ---------------------------------------------------------------------------------------------------------------------------

////////////////////////////
//   To Do List Copie    //
//////////////////////////

// let inp = document.querySelector('.box input');
// let plusBox = document.querySelector('.box-plus')
// let tasks = document.querySelector('.tasks');
// let noTasks = document.querySelector('.no-tasks');
// let cont = document.querySelector('.cont');

// plusBox.addEventListener('click', function () {

//     const div = document.createElement("div");
//     div.className = 'tsk';
//     div.textContent = inp.value;
//     document.body.appendChild(cont).appendChild(tasks).appendChild(div);

//     const span = document.createElement("span");
//     span.className = 'delete';
//     span.textContent = 'Delete';
//     document.body.appendChild(cont).appendChild(tasks).appendChild(div).appendChild(span);

//     noTasks.remove()

//     let task = document.querySelector('.task span');

//     let del = document.querySelector('.delete');
//     let createDiv = document.querySelector('.tsk');

//     del.onclick = function () {
//         createDiv.remove();
//     };

// });
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

////////////////////////////
//   Fetch Github Repos  //
//////////////////////////

// let theInput = document.querySelector('.get-repos input');
// let getButton = document.querySelector('.get-button');
// let reposData = document.querySelector('.show-data');

// getButton.onclick = function () {
//     getRepos();
// };

// // Get repos Function
// function getRepos() {

//     if (theInput.value == '') { // If Value Is Empty
//         reposData.innerHTML = "<span>Please Write Github Username</span>";

//     } else {
//         fetch(`https://api.github.com/users/${theInput.value}/repos`)

//             .then((res) => res.json())

//             .then((repos) => {

//                 // Empty the Container
//                 reposData.innerHTML = '';

//                 // Loop On repos
//                 repos.forEach(repo => {

//                     // Create The Main Div Element
//                     let mainDiv = document.createElement('div');

//                     // Create Repo Name text
//                     let repoName = document.createTextNode(repo.name);

//                     // Append The Text To Main Div
//                     mainDiv.appendChild(repoName);

//                     // Create Repo URL Anchor
//                     let theUrl = document.createElement('a');

//                     // Create Repo Url Text
//                     let theUrlText = document.createTextNode('Visit');

//                     // Append The Repo Url Text To Anchor Tag
//                     theUrl.appendChild(theUrlText);

//                     // Append The Repo Url Text To Anchor Tag
//                     theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

//                     // Set Attribute Blank
//                     theUrl.setAttribute('target', '_blank');

//                     // Append Url Anchor To Main Div
//                     mainDiv.appendChild(theUrl);

//                     // Create Stars Count Span
//                     let starsSpan = document.createElement('span');

//                     // Create The Stars Count text
//                     let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

//                     // Add Stars Count Text To Stars Span
//                     starsSpan.appendChild(starsText);

//                     // Append Stars Count Span To Main Div
//                     mainDiv.appendChild(starsSpan);

//                     // Add Class On Main Div
//                     mainDiv.className = 'repo-box';

//                     // Append The Main Div To Container
//                     reposData.appendChild(mainDiv);
//                 });
//             });
//     }
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

////////////////////////////
//      Hangman Game     //
//////////////////////////

// // Letters
// const Letters = 'abcdefghijklmnopqrstuvwxyz';

// // Get Array From Letters
// let lettersArray = Array.from(Letters);

// // Select Letters Container
// let lettersContainer = document.querySelector('.letters');

// // generate Letters
// lettersArray.forEach(letter => {

//     // Create Span
//     let span = document.createElement('span');

//     // Create Letter Text Node
//     let theLetter = document.createTextNode(letter);

//     // Append The Letter To Span
//     span.appendChild(theLetter);

//     // Add Class On Span
//     span.className = 'letter-box';

//     // Append Span To The Letters Container
//     lettersContainer.appendChild(span);
// });

// // Object Of Words + Categories
// const words = {
//     programming: ['php', 'javascript', 'go', 'scale', 'fortran', 'r', 'mysql', 'python'],
//     movies: ['Prestige', 'Inception', 'Parasite', 'Intersteller', 'Whiplash', 'Memento', 'Coco', 'Up'],
//     people: ['Albert Einstein', 'Hitchcock', 'Alexander', 'Cleopatra', 'Mahatma Ghandi'],
//     countries: ['Syria', 'Palestine', 'yemen', 'Egypt', 'Bahrain', 'Qatar']
// }

// // Get Random Property

// let allKeys = Object.keys(words);

// // Random Number Depend On Keys length
// let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// // Category
// let randomPropName = allKeys[randomPropNumber];

// // // Category Words
// let randomPropValue = words[randomPropName];

// // Random Number Depend On Words
// let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// // The Chosen Word
// let randomValueValue = randomPropValue[randomValueNumber];

// // Set Category Info
// document.querySelector('.game-info .category span').innerHTML = randomPropName;

// // Select Letters Guess Element
// let lettersGuesscontainer = document.querySelector('.letters-guess');

// // Convert Chosen Word To Array
// let lettersAndSpace = Array.from(randomValueValue);

// // Create Spans Depend On Word
// lettersAndSpace.forEach(letter => {

//     // Create Empty Span
//     let EmptySpan = document.createElement('span');

//     // If Letter Is Space
//     if (letter === ' ') {

//         // Add Class To The Span
//         EmptySpan.className = 'with-space'
//     }

//     // Append Span To The Letters Guess Container
//     lettersGuesscontainer.appendChild(EmptySpan);
// });

// // Select Guess Spans
// let guessSpans = document.querySelectorAll('.letters-guess span');

// // Set Wrong Attempts
// let wrongAttempts = 0;

// // Select The Draw Element
// let theDraw = document.querySelector('.hangman-draw')

// // Handle Clicking On Letters
// document.addEventListener('click', (e) => {

//     // Set the Chose Status
//     let theStatus = false;

//     if (e.target.className === 'letter-box') {

//         e.target.classList.add('clicked');

//         // Get Clicked Letter
//         let theClickedLetter = e.target.innerHTML.toLowerCase();

//         // The Chosen Word
//         let theChosenWord = Array.from(randomValueValue.toLowerCase());

//         theChosenWord.forEach((wordLetter, wordIndex) => {

//             // If The Clicked Letter Equal To One Of The Chosen Word Letter
//             if (theClickedLetter == wordLetter) {

//                 // Set Status To Correct
//                 theStatus = true;

//                 // Loop On All Guess Spans
//                 guessSpans.forEach((span, spanIndex) => {

//                     if (wordIndex === spanIndex) {

//                         span.innerHTML = theClickedLetter;



//                     }
//                 })

//             }

//         });

//         // OutSide Loop

//         // If Letter Is Wrong
//         if (theStatus !== true) {

//             // Increase The Wrong Attempts
//             wrongAttempts++;

//             // Add Class Wrong on the Draw Element
//             theDraw.classList.add(`wrong-${wrongAttempts}`);

//             // play Fail Sound
//             document.getElementById('fail').play();

//             if (wrongAttempts === 8) {

//                 endGame();

//                 lettersContainer.classList.add('finished');
//             }

//         } else {

//             // Play Success Sound
//             document.getElementById('success').play();
//         }
//     }
// });

// // End Game Function
// function endGame() {

//     // Create Popup Div
//     let div = document.createElement('div');

//     // Create Text
//     let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

//     // Append Text To Div
//     div.appendChild(divText);

//     // Add Class on Div
//     div.className = 'popup';

//     // Append To The Body
//     document.body.appendChild(div);
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

////////////////////////////
//   Hangman Game Copy   //
//////////////////////////

// let container = document.querySelector('.container');
// let drawLetters = document.querySelector('.draw-letters');
// let lettr = document.querySelector('.letter');

// let letters = document.createElement('div');

// let divText = document.createTextNode('abcdefghijklmnopqrstuvwxyz');

// letters.appendChild(divText);

// letters.className = 'letters';

// document.body.appendChild(container).appendChild(drawLetters).appendChild(letter).appendChild(letters);

// let lettersArr = letters.textContent.split('');

// let countries = 'morocco, Algeria, Egypt, France, Spain';

// let countriesArr = countries.split(', ');

// let random = Math.floor(Math.random() * countriesArr.length);

// let randomCountries = countriesArr[random];

// let countryArr = randomCountries.split('');

// let randomLetter = randomCountries[Math.floor(Math.random() * countryArr.length)];

// randomLetter.className = 'randomLetter';

// squares = document.createElement('span');

// squaresText = document.createTextNode(randomLetter);

// squares.appendChild(squaresText);

// squares.className = 'square';

// let footer = document.querySelector('.footer');

// document.body.appendChild(container).appendChild(footer).appendChild(squares);

// lettersArr.forEach(letter => {
//     spn = document.createElement('span');

//     spnText = document.createTextNode(letter.toLocaleUpperCase());

//     spn.appendChild(spnText);

//     spn.className = 'spn-letters';

//     document.body.appendChild(container).appendChild(drawLetters).appendChild(lettr).appendChild(spn);

//     spn.onclick = function () {
//         this.style.backgroundColor = '#BDBDBD';

//         if (randomLetter.toLocaleUpperCase() === this.textContent) {

//             this.style.backgroundColor = '#26A69A';

//             document.body.appendChild(container).appendChild(footer).appendChild(squares);
//         }
//     }
// });
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

////////////////////////////
// Control Local Storage //
//////////////////////////

// let allSpans = document.querySelectorAll('.buttons span');
// let results = document.querySelector('.results > span');
// let theInput = document.getElementById('the-input');

// allSpans.forEach(span => {

//     span.addEventListener('click', (e) => {

//         if (e.target.classList.contains('check-item')) {

//             checkInput()

//         }
//         if (e.target.classList.contains('add-item')) {

//             addItem()

//         }
//         if (e.target.classList.contains('delete-item')) {

//             deleteItem()

//         }
//         if (e.target.classList.contains('show-items')) {

//             showItems()

//         }

//     })

// });

// function checkInput() {

//     if (theInput.value === '') {

//         results.innerHTML = 'Input Cant Be Empty '

//     }
// }

// function showMessage() {

//     if (theInput.value !== '') {

//         if (localStorage.getItem(theInput.value)) {

//             results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

//         } else {

//             results.innerHTML = `No Local Storage item Called <span>${theInput.value}</span>`

//         }

//     } else {

//         showMessage()

//     }

// }

// function addItem() {

//     if (theInput.value !== '') {

//         localStorage.setItem(theInput.value, 'Test');

//         results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`

//         theInput.value = '';

//     } else {

//         showMessage()

//     }

// }

// function deleteItem() {

//     if (theInput.value !== '') {

//         if (localStorage.getItem(theInput.value)) {

//             localStorage.removeItem(theInput.value)

//             results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> Deleted`;

//             theInput.value = '';

//         } else {

//             results.innerHTML = `No Local Storage item Called <span>${theInput.value}</span>`

//         }

//     } else {

//         showMessage()

//     }

// }

// function showItems() {

//     if (localStorage.length) {

//         // console.log(`Found Element ${localStorage.length}`);

//         results.innerHTML = '';

//         for (let [key, value] of Object.entries(localStorage)) {

//             results.innerHTML += `<span class='keys'>${key}</span>`

//         }

//     } else {

//         results.innerHTML = 'Local Storage Empty'

//     }

// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/////////////////////////////////
// Copy Control Local Storage //
///////////////////////////////

// let allSpans = document.querySelectorAll('.buttons span');
// let results = document.querySelector('.field-show');
// let theInput = document.getElementById('the-input');

// allSpans.forEach(span => {

//     span.addEventListener('click', (e) => {

//         if (e.target.classList.contains('check')) {

//             checkItem()

//         }

//         if (e.target.classList.contains('add')) {

//             addItem()

//         }

//         if (e.target.classList.contains('delete')) {

//             checkItem()

//         }

//         if (e.target.classList.contains('show')) {

//             checkItem()

//         }

//     })
// });

// function checkItem() {

//     if (theInput.value === '') {

//         results.innerHTML = 'Input Cant Be Empty';

//     }
// }

// function showMessage() {

//     if (theInput.value !== '') {

//         if (localStorage.getItem(theInput.value)) {

//             results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

//         } else {

//             results.innerHTML = `No Local Storage item Called <span>${theInput.value}</span>`

//         }

//     } else {

//         showMessage()

//     }

// }

// function addItem() {

//     if (theInput.value !== '') {

//         localStorage.setItem(theInput.value, 'Test')

//         results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`

//         theInput.value = '';

//     } else {

//         showMessage()

//     }

// }

// function deleteItem() {

//     if (theInput.value == '') {

//         if (localStorage.getItem(theInput.value)) {

//             localStorage.removeItem(theInput.value)

//             results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> Deleted`

//             theInput.value = '';

//         }

//     } else {

//         showMessage()

//     }

// }

// function showItem() {

//     if (localStorage.length) {

//         results.innerHTML = '';

//         for (let [key, value] of Object.entries(localStorage)) {

//             results.innerHTML += `<span class='keys'>${key}</span>`

//         }

//     } else {

//         results.innerHTML = 'Local Storage Empty'

//     }

// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                            /////////////////////////////////
                            //           Quiz App         //
                            ///////////////////////////////



