module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('HEROKU_URL'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'fd205479dc69b668b3b0c8a4cdd1c5d0'),
    },
  },
});
