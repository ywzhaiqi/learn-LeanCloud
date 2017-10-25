const AV = require('leancloud-storage')

const APP_ID = 'jfL5VQyy8iIFc1c2rpf5Xvt3-gzGzoHsz';
const APP_KEY = 'nIYLDMkcXstwewmQ2ealKnIi';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

module.exports = {
  AV,
}