const users = [
  {
    id: 1,
    name: "Jon",
    surname: "Doe",
  },
  {
    id: 2,
    name: "Sarochka",
    surname: "Nochnya",
  },
];

class User {

  static getById(id) {

    console.log(id);
    const user = users.find((user) => user.id === id);
    console.log(user);
    return user || null;
  }
  
  static changeById(id, setName, setSurename){

    console.log(id);

    const user = users.find((user) => user.id === id);

    console.log(user);

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
}

module.exports = User;
