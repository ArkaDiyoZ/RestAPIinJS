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
    const user = users.find((user) => user.id === id);

    return user || null;
  }

  static getAll() {
    return users;
  }
}

module.exports = User;
