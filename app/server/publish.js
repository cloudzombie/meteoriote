// Meteor.publish('publicLists', function() {
//   return Lists.find({userId: {$exists: false}});
// });

// Meteor.publish('privateLists', function() {
//   if (this.userId) {
//     return Lists.find({userId: this.userId});
//   } else {
//     this.ready();
//   }
// });

// Meteor.publish('todos', function(listId) {
//   check(listId, String);

//   return Todos.find({listId: listId});
// });


Meteor.publish('userDevices', function() {
  if (this.userId) {
    return Devices.find({userId: this.userId});
  } else {
    this.ready();
  }
})

// Meteor.publish('userDevices', function() {
//     return Devices.find({userId: this.userId});
// });
