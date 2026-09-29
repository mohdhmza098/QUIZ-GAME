let section=document.getElementById("quiz");
let btn=document.getElementById("bt");
let currentquestionindex=0;
let score=0;
const qs=[
    {
        question:"LANGUAGE USED IN WEB DEVELOPMENT?",
        opt1:"PYTHON",
        opt2:"C++",
        opt3:"JAVASCRIPT",
        opt4:"RUST",
        answer:"JAVASCRIPT",

    },
    {
        question:"STACK IS BASED ON?",
        opt1:"FIFO OPERATION",
        opt2:"LIFO OPERATION",
        opt3:"BOTH FIFO AND LIFO",
        opt4:"NONE OF THE ABOVE",
        answer:"LIFO OPERATION",

    },
    {
        question:"WHICH OF THE FOLLOWING IS NOT A CODING LANGUAGE?",
        opt1:"SQL",
        opt2:"C++",
        opt3:"JAVASCRIPT",
        opt4:"RUST",
        answer:"SQL",

    },
    {
        question:"NAME THE CSS PROPERTY THAT ARE USED TO MAKE RESPONSIVE WEBPAGES IN MOBILE?",
        opt1:"FLEX-BOX",
        opt2:"GRID",
        opt3:"PSEUDO CLASS",
        opt4:"MEDIA QUERRY",
        answer:"MEDIA QUERRY",

    },
    {
        question:"WHICH OF THE FOLLOWING IS A DATABASE?",
        opt1:"SQL AND MONGO-DB",
        opt2:"C++",
        opt3:"JAVASCRIPT",
        opt4:"RUST",
        answer:"SQL AND MONGO-DB",

    },
    {
        question:"LANGUAGE WHICH GIVE STYLE AND COLOR IN WEB PAGE ?",
        opt1:"PYTHON",
        opt2:"C++",
        opt3:"JAVASCRIPT",
        opt4:"CSS",
        answer:"CSS",

    },

]
let dis=()=>{
    section.innerHTML="";
    if(currentquestionindex<qs.length){
        let h1=document.createElement("h1");
        let current=qs[currentquestionindex];
        h1.textContent=current.question;
        section.appendChild(h1);
        for(let i=1;i<=4;i++){
            let input=document.createElement("input");
            input.type="radio";
            input.name="option";
            input.value=current["opt"+i];
            let label=document.createElement("label");
            label.textContent=current["opt"+i];
            let br=document.createElement("br");
            section.appendChild(input);
            section.appendChild(label);
            section.appendChild(br);

        }

    }
    else{
        section.textContent=`QUIZ COMPLETE YOUR SCORE IS${score}/${qs.length} `;
        btn.disabled=true;
    }

}
btn.addEventListener("click",()=>{
    let selected=document.querySelector(`input[name="option"]:checked`);
    if(selected){
    if(selected.value===qs[currentquestionindex].answer){
        score++;
        
        
    } 
    currentquestionindex++;
    dis();
}
    else{
        alert("PLEASE SELECT OPTION AND GIVE ANSWER ");
    }
});
dis();