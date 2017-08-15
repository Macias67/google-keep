'use strict';
const config = ($mdThemingProvider) => {

    $mdThemingProvider.theme('GKeep')
        .primaryPalette('green')
        .accentPalette('grey', {
            'default': '800'
        });

    $mdThemingProvider.setDefaultTheme('GKeep');
    $mdThemingProvider.enableBrowserColor({
        theme: 'GKeep'
    });
};

export default config;