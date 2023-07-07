//gets the whole document to be printed.
const btnPrint = document.querySelector(".btn-print")

// opens the window to be printed.
btnPrint.addEventListener("click", () => window.print());