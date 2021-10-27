const numberOfDrumItems = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumItems; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert('I got clicked');
    });
}


