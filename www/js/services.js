angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'William Mullholland',
    lastText: 'Saint or Sinner?',
    face: 'img/willmull.png',
    audio: true,
    bio: 'William Mulholland Mary:- I would love to go to Los Angeles some day, have you ever been there?'
  }, {
    id: 1,
    name: 'Henry Ford',
    lastText: 'Fail harder!',
    face: 'img/henryford.png',
    audio: false
  }, {
    id: 2,
    name: 'Henry David Thoreaux',
    lastText: 'What are you doing out there?',
    face: 'img/hthor.png',
    audio: false
  }, {
    id: 3,
    name: 'John D Rockerfeller',
    lastText: 'there was blud',
    face: 'img/johnD.png',
    audio: false
  }, {
    id: 4,
    name: 'Nathanial Hawthorne',
    lastText: 'I was bleedin scarlet!',
    face: 'img/hawthorne.png',
    audio: false
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
