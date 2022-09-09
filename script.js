window.onload = function() {
    main()
};

function main() {
    let convert = document.getElementById("convert")
    convert.addEventListener("click", cleanText);

    let input = document.getElementById("input")
    let output = document.getElementById("output")

    let tmpContainer = document.getElementById("tmp-container")

    function updateResult(link) {
        output.innerText = `${output.innerText} ${link.innerHTML}\n`;
    }

    function cleanText(){
        tmpContainer.innerHTML = input.value

        let links = document.querySelectorAll("#tmp-container a")
        links.forEach( link => updateResult(link))
    }
}
