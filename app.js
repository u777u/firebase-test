var i = 0;

document.addEventListener('deviceready', function () {
    window.FirebasePlugin.setCurrentScreen("StellarFaucet - Faucet");
    window.FirebasePlugin.setUserId("NyanDev");
    window.FirebasePlugin.setAnalyticsCollectionEnabled(true);

});

document.getElementById('click-button').addEventListener('onclick', function() {
    i++;

    window.FirebasePlugin.logEvent("faucetClick", {
        reward: Math.round(Math.random * 1e4),
        count: i
    });
});