// navbar

var sidenavbar = document.querySelector(".side-navbar")

function showNavbar() {
    sidenavbar.style.left = "0"
}
function closeNavbar() {
    sidenavbar.style.left = "-60%"

}

//  discount 
var discount = document.querySelector(".discount")
var disicon = document.querySelector(".discount-icon")

disicon.addEventListener("click", function () {
    disicon.parentElement.remove()
})

// collection
   


var productcontainer = document.getElementById("product");
var productlist = productcontainer.querySelectorAll("div");
var checkboxes = document.querySelectorAll(".checkbox input[type='checkbox']");
var searchBox = document.getElementById("product-input");

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", updateDisplay);
});

searchBox.addEventListener("input", updateDisplay);

function updateDisplay() {
    var searchValue = searchBox.value.toUpperCase();
    var checkedValues = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.toUpperCase());

    productlist.forEach(function(product) {
        var productText = product.textContent.toUpperCase();
        var matchesSearch = productText.includes(searchValue);
        var matchesCheckbox = checkedValues.length === 0 || checkedValues.some(value => productText.includes(value));

        product.style.display = matchesSearch && matchesCheckbox ? "block" : "none";
    });
}

// Initial display update
updateDisplay();