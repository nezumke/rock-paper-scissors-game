const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
          document.querySelector('.cuteimg').classList.add('match-style');
        });
    };
  
  
  const imageLinks = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png"
};

    const Match = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const computerHandBack = computerHand.parentElement;
    const hands = document.querySelectorAll(".hands img, .computer-hand-back");

    hands.forEach(hand => {
        hand.addEventListener("animationend", function () {
            this.style.animation = "";
        });
    });

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
        option.addEventListener("click", function () {

            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            computerHand.classList.add("waiting");

            setTimeout(() => {
                compareHands(this.textContent, computerChoice);
                computerHand.src = imageLinks[computerChoice];
                computerHand.classList.remove("waiting");
            }, 2000);

            playerHand.src = imageLinks[this.textContent];
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHandBack.style.animation = "shakeComputer 2s ease";
        });
    });
};
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        
        if (playerChoice === computerChoice) {
            winner.textContent = "A Tie!";
            return;
        }
        
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "You win!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            }
        }
        
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You win!";
                pScore++;
                updateScore();
                return;
            }
        }
        
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "You win!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            }
        }
}
    startGame();
    Match();
};

game();


//Images:
//Main: Freepik
//Cute scissors illustration: amis0129 on DeviantArt
//Paper: Freepik
//Rocks: Flaticon