function checkAnswer(event){

    event.preventDefault()

    let score = 0;
    let total = 2;

    let q1 = document.forms["quizeForm"]["q1"].value,
        q2 = document.forms["quizeForm"]["q2"].value

    for(let i = 1; i <= total; i++){
        if(eval(`q${i}`) == ""){
            alert(`Siz ${i} ni tashlab o'tib ketdingiz`)
        }
    }

    
    for(let i = 1; i <= total; i++){
        let answer =[ "a", "b"];
       
        console.log(eval(`answer[${i -1}]`))
        if(eval(`q${i}`) == answer[i -1]){
            ++score
        }
    }

    result.textContent = score;
    percent.textContent = `${score * 100 /2} % to'pladingiz`;

    return score
}







