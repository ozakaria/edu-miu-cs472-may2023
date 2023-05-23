const path = require("path");

exports.getUsers = (req, res, next) => {
    const usersPath = path.join(__dirname, '..', 'public', 'users.html');
    res.sendFile(usersPath);
};

exports.addUser = (req, res, next) => {
    const { id, name } = req.body;
    const user = {
        id: id,
        name: name
    };
    res.status(200).json(user);
};
