var getCurrentDateTime = function () {};

getCurrentDateTime.register = function (Handlebars) {
    Handlebars.registerHelper('getCurrentDateTime', function() {
        var today  = new Date();
        var currentDate = today.toLocaleDateString("es-ES", { dateStyle: "long", timeZone: "Europe/Madrid" });
        var currentTime = today.toLocaleTimeString("es-ES", { timeZone: "Europe/Madrid" });
        return(currentDate+" a las "+currentTime);
    });
};

module.exports = getCurrentDateTime;