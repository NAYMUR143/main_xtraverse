const { projectsCollection } = require('./firebase');

// Add a new project document
projectsCollection.add({
  name: 'My new project',
  description: 'This is a test project',
  createdAt: new Date()
}).then((docRef) => {
  console.log('New project document added with ID: ', docRef.id);
}).catch((error) => {
  console.error('Error adding project document: ', error);
});
