const data = [
    {
        questions: ["what is your name?", "your name?", "who are you?", "who?", "your name?"],
        answer: "Abu Daud Hossain"
    },
    {
        questions: ["what do you?", "what is your job?", "what do you work?", "what do you work as?", "what do you work with?", "what do you work on?"],
        answer: "Jr. Software Engineer"
    },
]


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('', (answer) => {
            resolve(answer)
        })
    })
}

const main = async () => {
    while (true) {
        let getData = await question1();
        // console.log(getData)

        // work where
        const ans = data.find(info => info.questions.includes(getData));
        //    console.log(ans)
        if (ans) {

            console.log(ans.answer)
        } else {
            console.log("Please waite... I can not know. I ask my boss then answer this question.")

            const boosAnswer = await getAnswer(getData);

            console.log(`Your answer: ${boosAnswer}`);
            saveToData(boosAnswer, getData)
        }


    }
}

main();

const  getAnswer = async (ques) => {
    console.log(`hello, boss please give me answer this question.. ${ques}`)
    const boosAnswer = await question1();
    return boosAnswer;
}

const saveToData = (ans , ques) =>{
    const info = data.find(info => info.answer === ans);
    if(info){
        console.log(info.questions);
        info.questions.push(ques);
        console.log(info.questions);
    }else{
        console.log("Please done work")
    }
}