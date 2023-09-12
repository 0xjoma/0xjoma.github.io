function toggleName() {
    var nameElement = document.getElementById("nameCaption")
    if (nameElement.innerHTML === "0xjoma") {
        nameElement.innerHTML = "001100000111100001101010011011110110110101100001";
    } else {
        nameElement.innerHTML = "0xjoma";
    }
}