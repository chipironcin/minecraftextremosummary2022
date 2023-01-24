var getCountWithHearts = function () {};

getCountWithHearts.register = function (Handlebars) {
    Handlebars.registerHelper('getCountWithHearts', function(players, numberOfHearts) {
        const totalHearts = 3;
        const numberOfPlayers = players.filter(player => (totalHearts-player.deaths.length) == numberOfHearts).length;
        return numberOfPlayers;
    });
};

module.exports = getCountWithHearts;