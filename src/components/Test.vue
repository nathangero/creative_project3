<template>
    <div id="blackjack">
        <h1>Welcome to blackjack</h1>
        <button v-on:click="start">Start new game</button>
        <p v-if="gameStarted === true">
            <button id="playbuttons" v-on:click="drawCard">Hit</button>
            <button id="playbuttons" v-on:click="stay">Stay</button>
        </p>
        <br/> <br/>
        <p id="hand" v-if="cards.length > 0" v-for="card in cards">
            <img v-bind:src="card.image" v-bind:alt="card.alt"> 
                 
        </p>
        
    </div>
</template>

<script>
export default {
  data() {
      return {
        gameStarted: false,
        loading: true,
        data: {},
        deckID: 0,
        shuffled: false,
        remaining: 0,
        hand: [],
        cards: [],
      }
  },
  methods: {
      start: function() {
        this.loading = true;
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').then(response => {
            console.log("NEW GAME START!");
            return response.json();
        }).then(json => {
            this.data = json;
            this.deckID = json.deck_id;
            this.shuffled = json.shuffled;
            this.remaining = json.remaining;
            this.hand = new Array(); // Reinitialize the array when a new game is started
            this.cards = new Array();

            // console.log("deckid: " + this.deckID);
            // console.log("shuffled: " + this.shuffled);
            // console.log("remaining: " + this.remaining);
            
            /* Grab the first two cards to start the game */
            fetch('https://deckofcardsapi.com/api/deck/' + this.deckID + '/draw/?count=2').then(response => {
                return response.json();
            }).then(json => {
                // console.log("first two cards drawn");
                // console.log("card 1: " + json.cards[0].code);
                // console.log("card 2: " + json.cards[1].code);
                
                // Adds cards to the player's hand
                this.hand.push(json.cards[0].code);
                this.hand.push(json.cards[1].code);
                this.cards.push(json.cards[0]);
                this.cards.push(json.cards[1]);
                this.gameStarted = true; // Makes the buttons appear
            });
        })          
      },
      drawCard: function() {
          fetch('https://deckofcardsapi.com/api/deck/' + this.deckID + '/draw/?count=1').then(response => {
              return response.json();
          }).then (json => {
            console.log("card drawn: " + json.cards[0].code);
            this.hand.push(json.cards[0].code);
            this.cards.push(json.cards[0]);

          })
      },
      stay: function() {

      }
  }
}
</script>

<style scoped>
h1 {
    font-weight: normal;
}

#playbuttons {
    width: 10;
    padding: 8px 16px;
    border-radius: 3px;
    font-size: 16px;
    background-color: rgb(78, 165, 252);
    border: none;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
}

#hand {
    display: inline-block;
}
</style>
