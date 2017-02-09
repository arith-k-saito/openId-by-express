config = {
  PORT: 5000,
  SALT: 'OPENID_CONNECT',
  GOOGLE: {
    CLIENT_ID : '594466738208-b5fit4aas706bgv0mkhscqhqop9fh54t.apps.googleusercontent.com',
    CLIENT_SECRET : 'Wqa4S2l_pD7AKvZ4cP_zNpRP',
    REDIRECT_URL: 'http://localhost:5000/users',
    SCOPE: 'https://www.googleapis.com/auth/admin.directory.user.readonly',
    RESPONSE_TYPE: 'code'
  },
  FACEBOOK: {
    // 変数名はpassportにそのまま突っ込むから指定されたもの
    clientID: 'your_client_id',
    clientSecret: 'your_client_secret',
    callbackURL: 'http://example.com:3000/auth/callback',
    scope: ['email', 'user_friends', 'user_birthday', 'user_location']
  }
};