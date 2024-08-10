window.addEventListener('CookiebotOnAccept', function (e) {

    if (Cookiebot.consent.marketing) {
    
    smartsupp('marketingConsent', true);
    
    }
    
    if (Cookiebot.consent.statistics) {
    
    smartsupp('analyticsConsent', true);
    
    }
    
    })
    
    window.addEventListener('CookiebotOnDecline', function (e) {
    
    smartsupp('marketingConsent', false);
    
    smartsupp('analyticsConsent', false);
    
    })