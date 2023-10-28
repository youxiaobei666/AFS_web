const config = {
  development: {
    baseUrl: 'http://127.0.0.1:3001/',
  },
  production: {
    baseUrl: 'http://youxiaobei.top:3001/',
  },
};

export default config[process.env.NODE_ENV || 'development'];