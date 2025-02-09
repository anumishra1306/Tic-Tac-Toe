let currentPlayer = "X";
let arr = Array(9).fill(null);
// clicking the col
function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    CheckWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
function CheckWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) || 
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) || 
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
       alert(`Winner is ${currentPlayer}`);
       arr.fill(null);//
       document.querySelectorAll('.col').forEach(col => col.innerText = "");
       currentPlayer = "O";
        // return;
    }// drwan condition 
    if (!arr.some((e) => e === null)) {
        setTimeout(() => alert(`Draw!`), 2000);
        return;
    }
}
function resetGame() {
    arr.fill(null);// arrays ko null karna yani ki clear karna 
    // for each se sare .col ko clear karna then cureentplayer ki value phir se x set karna hai
    document.querySelectorAll('.col').forEach(col => col.innerText = "");
    currentPlayer = "O";
}

