// menu
let menu = confirm("Gonna play ?");



if (menu) {
    // if yes
    while (menu){
        // if yes
        const playerChoice = prompt ("rock, paper or scissors");
        playerChoice.trim().toLowerCase;
            if (
            playerChoice === "rock" ||
            playerChoice === "paper" ||
            playerChoice === "scissors"
            ) {
                // AI setting
                const ai = ["rock", "paper", "scissors"];
                const aichoice = Math.floor(Math.random()*ai.length);
                const def = ai[aichoice];
                
                // game logic
                    def === "rock" && playerChoice === "scissors"
                    ? console.log("ai : " + def + "\nplayer : "+playerChoice+"\nai wins!")
                    : def === "paper" && playerChoice === "rock"
                    ? console.log("ai : " + def + "\nplayer : "+playerChoice+"\nai wins!")
                    : def === "scissors" && playerChoice === "paper"
                    ? console.log("ai : " + def + "\nplayer : "+playerChoice+"\nai wins!")
                    : def === playerChoice ? "Tie game"
                    : console.log("ai : " + def + "\nplayer : "+playerChoice+"\nplayer wins!");
                
                menu = confirm("replay?");
                if (!menu) alert(thanks);
                continue;
        } else {
            alert("not a valid answer");

            
        }
        }
    



} else {
    alert("Maybe next time");
}