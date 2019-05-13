let deckOfCards = []
let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
let dealerHand = []
var playerHand = []
var playerPoints = document.getElementById('player-points')
var total = 0;
var dealerTotal = 0;
var playerTotal = 0;

suits.forEach(function (element) {
  for (let i = 2; i < 15; i++) {
    deckOfCards.push(
      {
        'points': i,
        'suit': element,
        'imageURL': "imgs/" + i + element[0] + '.jpg'

      }
    )
  }
})

console.log(deckOfCards)

document.getElementById("deal-button").addEventListener("click", function () {
  //write dealer logic here
  var cards = document.getElementsByClassName("cards")
  let card1 = Math.floor(Math.random() * 52)

  cards[0].setAttribute('src', deckOfCards[card1].imageURL)
  dealerHand.push(deckOfCards[card1])
  deckOfCards.splice(card1, 1)


  let card2 = Math.floor(Math.random() * 51)
  cards[1].setAttribute('src', deckOfCards[card2].imageURL)
  dealerHand.push(deckOfCards[card2])
  deckOfCards.splice(card2, 1)

  var dealerPoints = document.getElementById('dealer-points')

  dealerPoints.textContent = calculatePoints(dealerHand)
  dealerTotal = total
  total = 0;
  console.log(dealerTotal)
  console.log(total)



  let card3 = Math.floor(Math.random() * 50)
  cards[2].setAttribute('src', deckOfCards[card3].imageURL)
  playerHand.push(deckOfCards[card3])
  deckOfCards.splice(card3, 1)


  let card4 = Math.floor(Math.random() * 49)
  cards[3].setAttribute('src', deckOfCards[card4].imageURL)
  playerHand.push(deckOfCards[card4])
  deckOfCards.splice(card4, 1)


  playerPoints.textContent = calculatePoints(playerHand)
  playerTotal = calculatePoints(playerHand)
  total = 0;



});



document.getElementById("hit-button").addEventListener("click", function () {
  //write "hit" logic here
  var newCard = document.createElement('img')
  let nextCard = Math.floor(Math.random() * 48)

  newCard.setAttribute('src', deckOfCards[nextCard].imageURL)
  playerHand.push(deckOfCards[nextCard])
  deckOfCards.splice(nextCard, 1)

  newCard.style = "height: 150px"
  var ourPlayerHand = document.getElementById('player-hand')

  ourPlayerHand.appendChild(newCard)
  playerPoints.textContent = calculatePoints(playerHand)
  total = 0;
});



document.getElementById('stand-button').addEventListener("click", function () {
  //write "Stand" logic here
  console.log(dealerTotal)
  if (dealerTotal < 17) {
    var dealerNextCard = document.createElement('img')
    let nextCard = Math.floor(Math.random() * 48)
    dealerNextCard.setAttribute('src', deckOfCards[nextCard].imageURL)
    dealerHand.push(deckOfCards[nextCard])
    deckOfCards.splice(nextCard, 1)
    dealerNextCard.style = "height: 150px;"
    var ourDealerHand = document.getElementById('dealer-hand')
    ourDealerHand.appendChild(dealerNextCard)
    var dealerPoints = document.getElementById('dealer-points')
    dealerPoints.textContent = calculatePoints(dealerHand)
  } else {
    return dealerTotal
  }
});


function calculatePoints(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].points > 11) {
      total += 10

    } else {
      total += arr[i].points

    }

  }
  if (total > 21) {
    return "Bust! You lose!"
  } else {
    return total

  }

}
