/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    const { title } = req.body;
    try {
      const todo = await User.create({ title }).fetch();
      return res.status(201).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  getUsers: async function (req, res) {
    try {
      const users = await Users.find();
      return res.status(users);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  update: async function (req, res) {
    const { id } = req.params;
    const { completed } = req.body;
    try {
      const todo = await User.updatOne({ id }).set({ completed });
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  delete: async function (req, res) {
    const { id } = req.params;
    try {
      const todo = await User.destroyOne({ id });
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports.routes = {
  "/": { view: "pages/homepage" },
  "POST/user": "UserController.create",
  "GET/user": "UserController.getUsers",
  "PUT/user/:id": "UserController.update",
  "DELETE/user/:id": "UserController.delete",
};
