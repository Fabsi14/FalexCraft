// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')


onEvent('block.registry', event => {
  event.create('xnet_frame').model('xnet_frame').displayName('Xnet Machine Frame').material('stone').requiresTool(false)
})
