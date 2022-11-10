const users = require("../user/DataBaseModel");

class User {

  static getById(id) {

    const user = users.find((user) => user.id === id);

    return user || null;
  }

  static addNewUser(newUser){

      users.push(newUser);

      return users;
  }
  
  static changeById(id, setName, setSurename){

    const user = users.find((user) => user.id === id);

    if (user != undefined){
      user.name = setName;
      user.surname = setSurename;
      return user;
    }

    return null;
  }

  static getAll() {
    return users;
  }

  static deleteUser(delUserId){

    const index = users.findIndex(item => item.id === delUserId);
    console.log(index);
    users.splice(index, 1);

    return users;

  }
}

module.exports = User;
