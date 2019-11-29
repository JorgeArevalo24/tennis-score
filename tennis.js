
function Player(name) {
    this.name = name
    this.pointsWon = 0
    this.gamesWon = 0
}

Player.prototype.setPoints = function (points) {
    this.pointsWon = points
}

Player.prototype.getPointsWon = function () {
    return this.pointsWon
}

function Match(players) {
    this.players = players
    this.currentGame = null
}

Match.prototype.start = function () {
    this.currentGame = new Game(this.players);
    return this.currentGame
}

Match.prototype.getCurrentGame = function () {
    return this.currentGame
}

function Game(players) {
    this.players = players
}

Game.prototype.wonPoint = function (player) {

    let player1,
        player2

    this.players.forEach(function (p) {
        if (p === player) {
            player1 = p
        }
        else {
            player2 = p
        }
    })

    if (player1.pointsWon == 40 && player2.pointsWon <= 40) {
        console.log("Game Finish")
        console.log("Start new Game")

    }

    if (player.pointsWon == 0) {
        player.pointsWon = 15
    }
    else if (player.pointsWon == 15) {
        player.pointsWon = 30
    }
    else if (player.pointsWon == 30) {
        player.pointsWon = 40
    }
    else if ((player1.pointsWon >= 40 && player2.pointsWon <= 40) && (player1 > player2)) {
        player.pointsWon = 'A'
    }

    else {
        player.pointsWon = 40
        return "WIN"
    }
    console.log(player.name, ':', player.pointsWon, player2.name, ':', player2.pointsWon)


    if (player1.pointsWon == 40 && player2.pointsWon == 40) {
        console.log('Deuce')
    }

}


//GAME 1

const jorge = new Player('Jorge')
const nadal = new Player('Nadal')

let match = new Match([jorge, nadal])
match.start()

match.getCurrentGame().wonPoint(nadal)
match.getCurrentGame().wonPoint(jorge)
match.getCurrentGame().wonPoint(jorge)
match.getCurrentGame().wonPoint(nadal)
match.getCurrentGame().wonPoint(nadal)
match.getCurrentGame().wonPoint(jorge)
match.getCurrentGame().wonPoint(nadal)


//GAME 2
const playerA = new Player('Jorge')
const playerB = new Player('Nadal')


let game = new Match([playerA, playerB])

game.start()

game.getCurrentGame().wonPoint(playerA)
game.getCurrentGame().wonPoint(playerA)
game.getCurrentGame().wonPoint(playerB)
game.getCurrentGame().wonPoint(playerB)
game.getCurrentGame().wonPoint(playerB)
game.getCurrentGame().wonPoint(playerB)




//GAME 3
const playerC = new Player('Jorge')
const playerD = new Player('Nadal')

let game3 = new Match([playerC, playerD])

game3.start()

game3.getCurrentGame().wonPoint(playerC)
game3.getCurrentGame().wonPoint(playerC)
game3.getCurrentGame().wonPoint(playerD)
game3.getCurrentGame().wonPoint(playerC)
game3.getCurrentGame().wonPoint(playerD)
game3.getCurrentGame().wonPoint(playerC)

