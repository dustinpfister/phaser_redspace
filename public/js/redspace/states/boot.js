
game.state.add('boot', {

    create: function () {

        console.log('redspace boot state started!');

        Ship.mkSheet({
            game: this.game
        });

        Ship.createShip({
            game: this.game
        });

    }

});
