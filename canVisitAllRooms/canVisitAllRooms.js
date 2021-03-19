var canVisitAllRooms = function(rooms) {
  let visited = {};
  (function recursion(room) {
    if (visited[room]) {
      return;
    }
    if (rooms.length === Object.keys(visited)) {
      return;
    }
    visited[room] = true;
    rooms[room].forEach((key) => {
      recursion(key);
    })
  })(0);
  if (rooms.length !== Object.keys(visited).length) {
    return false;
  }
  return true;
};

(() => {
  console.log(canVisitAllRooms([[1],[2],[3],[]])); //true
  console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])); //false
  console.log(canVisitAllRooms([[1],[2],[],[3]])); //false
})();

//I: array of arrays
//O: bool - can visit every room

//iterate through rooms
  //make recursive function with current room?
    //if current key === current room
      //return
    //if there is a cycle
      //return
    //if there is no cycle and you've visited every room
      //return true
    //iterate through current room
      //make current key variable

      //repeat from line 9 and on
      //iterate through this room
//return false

/*
var canVisitAllRooms = function(rooms) {
  let cycle = {};
  var recursion = (currentRoom, roomNum) => {
    for (let j = 0; j < currentRoom.length; j++) {
      let key = currentRoom[j];
      if (key === currentRoom) {
        return;
      }
      if (cycle[roomNum]) {
        return false;
      }
      cycle[roomNum] = true;
      recursion(rooms[key], key);
    }
    return;
  }
  let result = recursion(rooms[0], 0);
  if (result === false || Object.values(cycle).indexOf(false)) {
    return false;
  }
  return true;
};
*/