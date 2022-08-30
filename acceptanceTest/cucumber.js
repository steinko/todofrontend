module.exports = {
  default: [
    'src/features/**/*.feature',
	  '--require src/features/**/*.js',
    '--require-module @babel/register'
  ].join(' '),
};

