// Prompt user for flavors

const flavors ="What are you flavors?";
let f = prompt(flavors);
showFlavors(f)

function showFlavors(f) {
    console.log("Your flavors are: " + f)
}