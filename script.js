
function start() {
    
    // variables
    const game = document.getElementById("game");
    var score = 0;
    
    // hide the header and start button  
    document.getElementById("start").style.display = "none";
    document.getElementById("header").style.display = "none";
    
    
    
    // change the innerHTML
    
    game.innerHTML = 
    `
    <br><br>
    <h2 id="q1">Q1. What is the most used language?</h2><br>
    <div id="o1">
    <input type="radio" name="o1"><span id="o1a">Java</span><br><br>
    <input type="radio" name="o1" id="o1b"><span id="o1b">JavaScript</span><br><br>
    <input type="radio" name="o1"><span id="o1c" >Python</span><br><br>
    <input type="radio" name="o1"><span id="o1d">C++</span><br><br>
    </div>
    <center>
    <button id="next">Next</button>
    </center>
    `

    // new variable 

    const next = document.getElementById("next");

    next.addEventListener("click", () => {
        if (document.getElementById("o1b").checked) {
        score++;
    }

    game.innerHTML = 
    `
    <br><br>
    <h2 id="q1">Q2. What is the most demanded language?</h2><br>
    <div id="o1">
    <input type="radio" name="o1" id="o2b"><span id="o1a">JavaScript</span><br><br>
    <input type="radio" name="o1"><span id="o1b">Python</span><br><br>
    <input type="radio" name="o1"><span id="o1c" >Java</span><br><br>
    <input type="radio" name="o1"><span id="o1d">C#</span><br><br>
    </div>
    <center>
    <button id="next2">Next</button>
    </center>
    `
    // new variable

    var next2 = document.getElementById("next2");
    next2.addEventListener("click", () => {
        if (document.getElementById("o2b").checked) {
            score++;
        }

        game.innerHTML = 
        `
        <br><br>
    <h2 id="q1">Q3. Which language is known as the logic of a webpage?</h2><br>
    <div id="o1">
    <input type="radio" name="o1"><span id="o1a">HTML</span><br><br>
    <input type="radio" name="o1"><span id="o1b">CSS</span><br><br>
    <input type="radio" name="o1" id="o3b"><span id="o1c">JavaScript</span><br><br>
    <input type="radio" name="o1"><span id="o1d">PHP</span><br><br>
    </div>
    <center>
    <button id="next3">Next</button>
    </center>
        `

        // new variable 
        var next3 = document.getElementById("next3");

        next3.addEventListener("click", () => {
            if(document.getElementById("o3b").checked){
                score++;
            }

            game.innerHTML = 
        `
        <br><br>
        <h2 id="q1">Q4. Which is the easiest language?</h2><br>
        <div id="o1">
        <input type="radio" name="o1" id="o4b"><span id="o1a">HTML</span><br><br>
        <input type="radio" name="o1"><span id="o1b">CSS</span><br><br>
        <input type="radio" name="o1"><span id="o1c">JavaScript</span><br><br>
        <input type="radio" name="o1"><span id="o1d">PHP</span><br><br>
        </div>
        <center>
        <button id="next4">Next</button>
        </center>
            `

            // new variable
            var next4  = document.getElementById("next4");

            next4.addEventListener("click", () => {
                if(document.getElementById("o4b").checked){
                    score++;
                }

                game.innerHTML = 
                `
                <br><br>
                <h2 id="q1">Q5. What is the hardest language?</h2><br>
                <div id="o1">
                <input type="radio" name="o1" id="o5b"><span id="o1a">C++</span><br><br>
                <input type="radio" name="o1"><span id="o1b">TypeScript</span><br><br>
                <input type="radio" name="o1"><span id="o1c">JavaScript</span><br><br>
                <input type="radio" name="o1"><span id="o1d">Mercury</span><br><br>
                </div>
                <center>
                <button id="next5">Next</button>
                </center>
                    `

                    // new variable
                    var next5 = document.getElementById("next5");

                    next5.addEventListener("click", () => {
                        if(document.getElementById("o5b").checked){
                            score++;
                        }
                    
                        game.innerHTML =
                        `
                        <br><br><br><br><br><br>
                        <h3 id="showscore">You answered ${score}/5 questions correct🔥</h3>
                        `

                    })
        });

        })


    })
    });


}