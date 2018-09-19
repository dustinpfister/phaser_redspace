
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
        //game.physics.startSystem(Phaser.Physics.ARCADE);

        game.physics.startSystem(Phaser.Physics.P2JS);

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

        this.game.data = {};

        var text = game.data.disp = game.add.text(10, 10, 'foo', {
                fill: '#ffff00',
                font: '15px courier'
            });
        text.fixedToCamera = true;

    },

    update: function () {

        Ship.tick();
        Background.tick(this.game);

        //game.data.disp.text = Ship.ship.x + ',' + Ship.ship.y
        //game.data.disp.text = game.camera.position.x + ',' + game.camera.position.y
        game.data.disp.text = Ship.ship.body.velocity.x.toFixed(2) + ',' + Ship.ship.body.velocity.y.toFixed(2)

    }

});
