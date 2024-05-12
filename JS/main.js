// Función que devuelve una promesa

function generateRandomNumber() {
    // Completar la función para generar un número aleatorio par
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.random() * 100;
            if (randomNumber === 0) {
                reject("Error el número generado es 0")
            }
            resolve(randomNumber.toFixed(0));
        }, 500)
    })

}


// Manejar el clic del botón
document.getElementById('generateButton').addEventListener('click', () => {
    // Generar el número par y manejar el resultado usando .then() y .catch()
    const $elementResult = document.getElementById("resultList");
    let $li = document.getElementById("list");

    if ($li !== null) {

        $li.remove();

    }
    $li = document.createElement("li");
    $li.id = "list"


    generateRandomNumber()
        .then(randomNumber => {
            // Completar el código para manejar el caso en que se genera un número par

            if (randomNumber % 2 == 0) {
                $li.classList.add("even")
                $li.textContent = `El número generado ${randomNumber} es par`
            } else {
                $li.classList.add("odd")
                $li.textContent = `El número generado ${randomNumber} es impar`
            }

        })
        .catch(error => {
            // Completar el código para manejar el caso en que se genera un error
            $li.classList.add("err")
            $li.textContent = error

        });
    $elementResult.appendChild($li)
});