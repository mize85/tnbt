/* jshint node: true */

var HOST = "http://localhost:8000";

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'web-app',
    podModulePrefix: 'web-app/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


    if (environment === 'production') {
        HOST = "http://tnbt.elasticbeanstalk.com";
    }

    ENV.APP.API_HOST = HOST;
    ENV.APP.API_NAMESPACE = 'api/v1';


    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      serverTokenEndpoint: HOST+'/api-token-auth/',

      crossOriginWhitelist: [HOST]
    };

    ENV['simple-auth-token'] = {
        serverTokenEndpoint: HOST+'/api-token-auth/',
        authorizationPrefix: 'Token ',
        tokenPropertyName: 'secure.token'
    };

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' https://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' "+HOST, // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' ",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
    };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }



  return ENV;
};
