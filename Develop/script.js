//Manipulating DOM to show current day
var currentDay = document.getElementById("currentDay");
console.log(currentDay);
currentDay.textContent=moment().format('dddd, MMMM Do');

//Local storage
var save = document.getElementById("fas fa-save")
var value =  document.getElementById("value");
var key = 

$(".save").on("click", function() {
    console.log($(this).siblings("input").val())
    var todo = $(this).siblings("input").val()
    var key = $(this).parent().attr("id")
    console.log(key)
    localStorage.setItem(key, todo)
})

for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log("save");
}


function populateNotes() {
    var keys = Object.entries(localStorage)
    console.log(keys)

    for(var item of keys) {
        console.log(item[0], item[1]) //2D array for key&value
        $("#" + item[0]).children('input').val(item[1])
    }
}
populateNotes()