config = {
  PORT: 5000,
  SALT: 'OPENID_CONNECT',
  GOOGLE: {
    CLIENT_ID : '',
    CLIENT_SECRET : '',
    REDIRECT_URL: 'http://localhost:5000/users',
    SCOPE: 'openid',
    RESPONSE_TYPE: 'code'
  },
  FACEBOOK: {
    // 変数名はpassportにそのまま突っ込むから指定されたもの
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:5000/fbusers',
    scope: ['email']
  }
};