
game.state.add('boot', {

    create: function () {

        console.log('redspace boot state started!');

        // scale settings
        var scale = this.game.scale;

        scale.compatibility.scrollTo = false;
        scale.pageAlignHorizontally = true;
        scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        scale.width = document.getElementById(game.parent).scrollWidth;
        scale.height = document.getElementById(game.parent).scrollHeight;

        // disable antialias
        game.antialias = false;

        // will be using physics
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.world.resize(640, 480);

        Background.mkSheet({
            game: this.game
        });

        Background.createTileSprite({
            game: this.game
        });

        Ship.mkSheet({
            game: this.game
        });

        Ship.createShip({
            game: this.game
        });

    }

});
