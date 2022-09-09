window.onload = function() {
    main()
};

function main() {
    let convert = document.getElementById("convert")
    convert.addEventListener("click", cleanText);

    let input = document.getElementById("input")
    let output = document.getElementById("output")

    let tmpContainer = document.getElementById("tmp-container")

    function updateResult(result, link) {
        return `${result} ${link.innerHTML}\n`;
    }

    function cleanText(){
        tmpContainer.innerHTML = input.value

        let result = ''

        let links = document.querySelectorAll("#tmp-container a")
        links.prototype.forEach( link => result = updateResult(result, link))

        output.innerText = result
    }
}
