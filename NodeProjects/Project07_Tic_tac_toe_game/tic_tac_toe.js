// class TicTacToe {
//     private board: string[];
//     private currentPlayer: string;
//     private winner: string | null;
//     private gameActive: boolean;
//     constructor() {
//         this.board = Array(9).fill('');
//         this.currentPlayer = 'X';
//         this.winner = null;
//         this.gameActive = true;
//     }
//     public makeMove(index: number): boolean {
//         if (!this.gameActive || this.board[index] !== '') {
//             return false;
//         }
//         this.board[index] = this.currentPlayer;
//         this.checkWinner();
//         if (this.winner) {
//             this.gameActive = false;
//         } else {
//             this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
//         }
//         return true;
//     }
//     private checkWinner(): void {
//         const winningCombinations = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6]
//         ];
//         for (const combination of winningCombinations) {
//             const [a, b, c] = combination;
//             if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
//                 this.winner = this.board[a];
//                 return;
//             }
//         }
//         if (this.board.every(cell => cell !== '')) {
//             this.winner = 'Draw';
//             this.gameActive = false;
//         }
//     }
//     public getBoard(): string[] {
//         return this.board;
//     }
//     public getCurrentPlayer(): string {
//         return this.currentPlayer;
//     }
//     public getWinner(): string | null {
//         return this.winner;
//     }
//     public isGameActive(): boolean {
//         return this.gameActive;
//     }
// }
// // Example usage:
// const game = new TicTacToe();
// console.log(game.getBoard()); // Initial board
// game.makeMove(0);
// console.log(game.getBoard()); // Board after first move
// game.makeMove(1);
// console.log(game.getBoard()); // Board after second move
// // Continue making moves and checking the board state
// index.ts
import * as readline from 'readline';
class TicTacToe {
    board;
    currentPlayer;
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ];
        this.currentPlayer = 'X';
    }
    printBoard() {
        this.board.forEach(row => {
            console.log(row.join(' | '));
        });
    }
    makeMove(row, col) {
        if (this.board[row][col] !== ' ') {
            console.log('Cell already taken, try again.');
            return false;
        }
        this.board[row][col] = this.currentPlayer;
        return true;
    }
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    checkWin() {
        const winPatterns = [
            // Rows
            [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
            [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }],
            [{ r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 2 }],
            // Columns
            [{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }],
            [{ r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }],
            [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }],
            // Diagonals
            [{ r: 0, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 2 }],
            [{ r: 0, c: 2 }, { r: 1, c: 1 }, { r: 2, c: 0 }],
        ];
        return winPatterns.some(pattern => pattern.every(pos => this.board[pos.r][pos.c] === this.currentPlayer));
    }
    checkDraw() {
        return this.board.flat().every(cell => cell !== ' ');
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const game = new TicTacToe();
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
    console.log('Welcome to Tic Tac Toe!');
    game.printBoard();
    while (true) {
        const row = parseInt(await askQuestion(`Player ${game.currentPlayer}, enter row (0, 1, 2): `));
        const col = parseInt(await askQuestion(`Player ${game.currentPlayer}, enter column (0, 1, 2): `));
        if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2) {
            console.log('Invalid input, please enter numbers between 0 and 2.');
            continue;
        }
        if (!game.makeMove(row, col))
            continue;
        game.printBoard();
        if (game.checkWin()) {
            console.log(`Player ${game.currentPlayer} wins!`);
            break;
        }
        if (game.checkDraw()) {
            console.log('The game is a draw!');
            break;
        }
        game.switchPlayer();
    }
    rl.close();
}
main();
