var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var player = 1
var playTurn = function (index) {
  if (board[index] || isGameOver()) {
    return false
  } else {
    board[index] = player
    if (player === 1) {
      player = 2
    }
    else { player = 1 }
    return true
  }
}
var whoWon = function () {
  if (board[0] + board[1] + board[2] + board[3] + board[4] + board[5] + board[6] + board[7] + board[8] === 0) return 0
  if (board[0] === 1 && board[1] === 1 && board[2] === 1) return 1
  if (board[0] === 2 && board[1] === 2 && board[2] === 2) return 2
  if (board[3] === 1 && board[4] === 1 && board[5] === 1) return 1
  if (board[3] === 2 && board[4] === 2 && board[5] === 2) return 2
  if (board[6] === 1 && board[7] === 1 && board[8] === 1) return 1
  if (board[6] === 2 && board[7] === 2 && board[8] === 2) return 2
  if (board[3] === 1 && board[4] === 1 && board[5] === 1) return 1
  if (board[3] === 2 && board[4] === 2 && board[5] === 2) return 2
  if (board[6] === 1 && board[7] === 1 && board[8] === 1) return 1
  if (board[6] === 2 && board[7] === 2 && board[8] === 2) return 2
  if (board[0] === 1 && board[3] === 1 && board[6] === 1) return 1
  if (board[0] === 2 && board[3] === 2 && board[6] === 2) return 2
  if (board[1] === 1 && board[4] === 1 && board[7] === 1) return 1
  if (board[1] === 2 && board[4] === 2 && board[7] === 2) return 2
  if (board[2] === 1 && board[5] === 1 && board[8] === 1) return 1
  if (board[2] === 2 && board[5] === 2 && board[8] === 2) return 2
  if (board[0] === 1 && board[4] === 1 && board[8] === 1) return 1
  if (board[0] === 2 && board[4] === 2 && board[8] === 2) return 2
  if (board[2] === 1 && board[4] === 1 && board[6] === 1) return 1
  if (board[2] === 2 && board[4] === 2 && board[6] === 2) return 2
  if (board[0] + board[1] + board[2] + board[3] + board[4] + board[5] + board[6] + board[7] + board[8] === 13) return 3
}
var isGameOver = function (move) {
  if (whoWon === 1) { return true } else if (whoWon === 2) {
    return true
  } else if (whoWon === 3) {
    return true
  } else {
    return false
  }
}

var restart = function () {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  player = 1
}

$(document).ready(function () {
  console.log('ready')
  $('.sqr').click(function (event) {
    $('h2').html('Make your move.')
    playTurn(Number(event.currentTarget.id))
    if (player === 1) {
      $(this).addClass('player1')
    } else if (player === 2) {
      $(this).addClass('player2')
    }
    if (whoWon() === 1) {
      $('h2').html('Pink player wins.')
        if (confirm('Play again?'))window.location.reload()
      }
      else if (whoWon() === 2) {
        $('h2').html('Blue player wins.')
        if(confirm('Play again?'))window.location.reload()
      }
      else if (whoWon() === 3) { $('h2').html('Tie!')
        if(confirm('Play again?'))window.location.reload()
      }
  })
})
