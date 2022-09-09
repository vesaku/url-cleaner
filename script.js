window.onload = () => {
    let input = document.getElementById("input")
    let output = document.getElementById("output")
    let tmpContainer = document.getElementById("tmp-container")

    document.getElementById("convert").addEventListener("click", cleanText)
    function cleanText(){
        tmpContainer.innerHTML = input.value

        let links = document.querySelectorAll("#tmp-container a")
        let contents = Array.from(links).map(link => {
            return link.innerHTML
        })

        console.log(contents)

        output.value = contents.reduce((previousValue, currentValue) => {
            return `${previousValue}\n${currentValue}`
        })
    }

    document.getElementById("reset").addEventListener("click", reset)
    function reset(){
        if (!window.confirm("Are you sure?")) {
            return false
        }

        input.value = ''
        output.value = ''
        tmpContainer.value = ''
    }
}
