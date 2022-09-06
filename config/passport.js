const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = (passport) => {
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
   await User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { msg: `Email ${email} not found.` })
      }
      if (!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, { msg: 'Invalid email or password.' })
      })
    })
  }))
  

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser( async (id, done) => {
    await User.findById(id, (err, user) => done(err, user))
  })
}
