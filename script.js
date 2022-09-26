window.onload = () => {
    const input = document.getElementById("input")
    const output = document.getElementById("output")
    const tmpContainer = document.getElementById("tmp-container")

    let keyTimer = null

    input.addEventListener("keyup", function () {
        clearTimeout(keyTimer);
        keyTimer = setTimeout(convertText, 300)
    })

    function emptyContainers() {
        tmpContainer.innerHTML = ''
        output.placeholder = ''
        output.value = ''
    }

    function convertText() {
        if (input.value === '') {
            emptyContainers()
            return
        }

        tmpContainer.innerHTML = input.value

        const links = document.querySelectorAll("#tmp-container a")
        const contents = Array.from(links).map(link => {
            return link.innerHTML
        })

        if (contents.length < 1) {
            emptyContainers()
            output.placeholder = 'Изначальный текст в неверном формате.'
            return
        }

        output.placeholder = ''
        output.value = contents.reduce((previousValue, currentValue) => {
            return `${previousValue}\n${currentValue}`
        })

        tmpContainer.innerHTML = ''
    }
}
