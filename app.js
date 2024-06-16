let boxes = document.querySelectorAll(".box");
let rset = document.getElementById("reset");
let newGame = document.getElementById("new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let check = true; // 0 turn
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (check) {
            box.innerText = "0";
            box.style.color = "red";
            check = false;
        } else {
            box.innerText = "X";
            box.style.color = "yellow"
            check = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count == 9){
            msgContainer.classList.remove("hide");
            msg.innerText = `Game was Draw`;
        }
    });
});

let disabledbox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

let enabledbox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msg.innerText = "";
    msgContainer.classList.add("hide");
}

let showWinner = (winner) => {
    msg.innerText = `Congrats winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbox();
}

let checkWinner = () => {
    for (let pattern of winnerPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1); // Pass the winner (pos1) to the showWinner function
                return;
            }
        }
    }
}

const resetGame = () => {
    check = true;
    enabledbox();
    count = 0;
}

rset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
