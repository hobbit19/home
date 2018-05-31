const remoteStorage = new RemoteStorage({
	logging: true
})
remoteStorage.access.claim('notes', 'rw')

// Enable widget
const widget = new Widget(remoteStorage)
widget.attach('rs-widget')

// Events
remoteStorage.on('connected', () => {
  const userAddress = remoteStorage.remote.userAddress
  console.debug(`${userAddress} connected their remote storage.`)
})

remoteStorage.on('network-offline', () => {
  console.debug(`We're offline now.`)
})

remoteStorage.on('network-online', () => {
  console.debug('network online')
})

// Module
var Notes = {
  name: 'notes',
  builder: function(privateClient, publicClient) {
    privateClient.declareType('note', {
      type: 'object',
      properties: {
        content: {type: 'string'}
      },
      required: ['content']
    })
    return {
      exports: {
        getAll() {
          // List all items in the "foo/" category/folder
          privateClient.getAll('')
						.then(objects => console.log({objects}))
        },
        add(content) {
          const note = {content}
          // const path = MD5Hash(note)
          const path = new Date().toString()
          privateClient
            .storeObject('note', path, note)
            .then(() => console.log('note saved'))
            .catch(err => console.log(err))
        }
      }
    }
  }
}

remoteStorage.addModule(Notes)
