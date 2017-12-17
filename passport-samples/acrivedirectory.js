(function() {
  "use strict";

  var passport = require('passport')
  var ActiveDirectoryStrategy = require('passport-activedirectory')
  
  passport.use(new ActiveDirectoryStrategy({
    integrated: false,
    ldap: {
      url: 'ldap://my.domain.com',
      baseDN: 'DC=my,DC=domain,DC=com',
      username: 'readuser@my.domain.com',
      password: 'readuserspassword'
    }
  }, function (profile, ad, done) {
    ad.isUserMemberOf(profile._json.dn, 'AccessGroup', function (err, isMember) {
      if (err) return done(err)
      return done(null, profile)
    })
  }))
}());