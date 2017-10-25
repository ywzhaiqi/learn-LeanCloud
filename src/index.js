const { AV } = require('./db')

const TestObject = AV.Object.extend('TestObject')
const testObject = new TestObject()
testObject.save({
  // objectId: '1',
  words: 'Hello, world!'
}).then(obj => {
  console.log('已存储')
})