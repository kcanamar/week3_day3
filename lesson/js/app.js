console.log($)

///////////////////
//  Selecting Elements
///////////////////

// document.querySelectpr("h1") - only grabs the first elemenet

// defer in the opening script tag to make sure the DOM is complete before the .js runs

// exact same as .querySelectorAll()
// this will show in the console a array tree showing the proper notaion for selecting a specific child

const $h1 = $("h1")
console.log($h1)

// search by id 
////////////////
// const $h1 = $("#hello")
// console.log($h1)

// search by class
////////////////
// const $h1 = $(".goodbye")
// console.log($h1)

////////////////
// Editing Contents
////////////////

// change the text
// h1.innerText = "New Text"

// $h1.text("New Text")
// $h1.text("<h2>New text</h2>New Text")

// ^^ using the jquery function $() to select all h1 tags and edit them simutaniously with new text vs. having to write the itteration loops in vanilla javascript.

// change the html
// h1.innerHTML = "New Text"

// $h1.html("New Text")
// $h1.html("<h2>New text</h2>New Text2")

// when coding think about the functionaltiy before the code needed to be written.

////////////////////
// Styling
////////////////////

// Adding classes 
///////////////

// const gb = document.querySelector(".goodbye")
// gb.classList.add("red")

// $(".goodbye").addClass("red")

// Removing classes
///////////////////

// const gb = document.querySelector(".goodbye")
// gb.classList.remove("red")

// $(".goodbye").removeClass("red")

// Toggling
/////////////

// const gb = document.querySelector(".goodbye")
// gb.classList.toggle("red")

// $(".goodbye").toggleClass("red")
// $(".goodbye").toggleClass("red")

// Targeted editing
/////////////

// gb.style.backgroundColor = "pink"

// $(".goodbye").css("background-color", "blue")

// important to referance the .css() in order to access the css library read by the jquery script tag.

////////////////
// Creating Elements
////////////////

// use html syntax to create new html elements with jquery

// with "<>" you are createing without "<>" you are selecting the argument passed into the $() funtion.

// Example
///////////

// document.creatElement("div") - vanilla JS

// Adds to the end of the element
const $div = $("<div></div>")
// $div.html("<h2></h2>")
$("body").append($div)

// Adds to the front of the element
// const $div = $("<div></div>")
// $div.html("<h2>This is the new div</h2>")
// $("body").prepend($div)

// 10 min challenge
// create a ul, append it to the div
// then add li that count 1,2,3,4,5

// Creating by hardcoding
////////////////

// const $ul = $("<ul></ul>")
// $("div").append($ul)
// $("ul").append("<li>1</li>", "<li>2</li>", "<li>3</li>", "<li>4</li>", "<li>5</li>")

// Itterating with a loop
/////////////

// const $ol = $(`<ol>`)
// $('div').append($ol)
// for(let li = 0; li < 5; li++){
//     let $li = $(`<li></li>`)
//     $(`ol`).append($li)
// }

// Sample Answer - long coding
/////////////
// const $ul = $("<ul></ul>")
// $div.append($ul)

// $li1 = $("<li>1</li>")
// $ul.append($li1)

// $li2 = $("<li>2</li>")
// $ul.append($li2)

// $li3 = $("<li>3</li>")
// $ul.append($li3)

// $li4 = $("<li>4</li>")
// $ul.append($li4)

// $li5 = $("<li>5</li>")
// $ul.append($li5)

// Sample Loop 
///////////////////

// ul is created
// const $ul = $("<ul>")
// $("div").append($ul)
// for (let i = 1; i <= 5; i++) {
//     const $li = $(`<li>${i}</li>`)
//     $ul.append ($li)
// }

////////////////////
// Working with Attributes
///////////////////

// attribute class are worth 10 point to specifity similarly to classes hard written in html

const $hello = $("[cheese='munster']")
// const $hello =
console.log($hello.attr("id"))

// Changing existing attribute with .attr(element, change)
$hello.attr("cheese", "gouda")

/////////////
// Backwards planning - Best practice in developing user friendly code
/////////////
/*
Before you starting building code, start by designing the user experience story to dictate the code to the user experiance.

create the "what" before the "how"
*/
//////////////

/////////////
// Building the Todo List
/////////////

// set the stage - select my elements

const $textInput = $("[type='text']")
const $submit = $("[type='submit']")
const $ul = $("#todo-display")

// console.log($textInput, $submit, $ul)

const todos = []

// Frontend code is event driven

// Event listeners
/////////////////
// when 'submit' is inside a <form></form> tag the "enter" key can be used 'click' the submit button.

// submit.addEventListener("click", () => {}) - vanilla JS
// $submit.on("click", (event) => {

//     // prevent default form behavior
//     event.preventDefault()

//     // get the value form the input box 
//     // textinput.value - vanilla JS
//     const newTodo = $textInput.val()

//     // add to list of todos
//     todos.push(newTodo)

//     // add an li with the new todo
//     const $li = $("<li></li>")
//     $li.text(newTodo)
//     $ul.append($li)

//     // add a second event listener to remove the new li when clicked

//     // create a remove function
//     const remove = () => {
        
//         // console.log("you clicked " + newTodo) - verifying that the function is behaving as intended
//         // find the index of todo in todos
//         // const index = todos.indexOf(newTodo)
        
//         // turn the event target to a JQ object
//         const $target = $(event.target)

//         // then remove the todo from todos[]
        
//         // $target.remove()

//         //empty the ul
//         // $ul.empty()

//         // loop over the todos and rebuild to li's
//         // for (todo of todos) {
//         //     $ul.append($("<li></li>").text(todo).on("click", remove))
//         // }
//     }
//     $li.on("click", remove)

//     // clear the input after submitted
//     $textInput.val("")
// })

$submit.on("click", (event) => {
    // prevents default form behavior
    event.preventDefault()
    // get the value from the input
    // textInput.value
    const newTodo = $textInput.val()
    // add to list of todos
    todos.push(newTodo)
    // add an li with the new todo
    const $li = $("<li>")
    $li.text(newTodo)
    $ul.append($li)
    // add removal event listener
    const remove = (event) => {
        // turn the event target to a jQ object
        const $target = $(event.target)
        // remove it
        $target.remove()
    }
    $li.on("click", remove)
    // clear the input
    $textInput.val("")
})