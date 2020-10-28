//It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
