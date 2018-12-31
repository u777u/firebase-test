var i = 0;

document.addEventListener('deviceready', function () {
    cordova.plugins.firebase.analytics.setCurrentScreen("StellarFaucet - Faucet");
    cordova.plugins.firebase.analytics.setUserId("NyanDev");

});

document.getElementById('click-button').addEventListener('onclick', function() {
    i++;
    
    cordova.plugins.firebase.analytics.logEvent("faucetClick", {
        reward: Math.round(Math.random * 1e4),
        count: i
    });
});