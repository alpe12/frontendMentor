async function newAdvice (){
    const dice = document.querySelector('.card .button .dice');
    
    //Não fazer um novo request, caso já tenha um sendo feito.
    if (dice.classList.contains('animate')) return;

    dice.classList.add('animate');
    try {
        const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
        const data = await response.json(),
              adviceNumber = document.querySelector('.card .advicenumber .number'),
              adviceText = document.querySelector('.card .advicetext span');
        adviceNumber.innerText = data.slip.id;
        adviceText.innerText = data.slip.advice;
    } catch (error) {
        console.error(error);
    } finally {
        dice.classList.remove('animate');
    }
}

document.querySelector('.card .button').addEventListener('click', newAdvice);