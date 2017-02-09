'use strict';

const FacebookStrategy = require('passport-facebook').Strategy;

let initPassport = function(passport) {
  passport.use(new FacebookStrategy(config.FACEBOOK, (accessToken, refreshToken, profile, done) => {
    // asynchronous verification, for effect...
    process.nextTick(() => {
      return done(null, profile);
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) =>{
    done(null, obj);
  });
};

module.exports = initPassport;
