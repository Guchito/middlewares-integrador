module.exports = {
    showRegister: (req, res) => {
        // Do the magic
        return res.send('Do the magic');
    },
    processRegister: (req, res) => {
        // Do the magic
        return res.send('Do the magic');
    },
    showLogin: (req, res) => {
        // Do the magic
        return res.send('Do the magic');
    },
    processLogin: (req, res) => {
        // Do the magic
        return res.send('Do the magic');
    },
    showProfile: (req, res) => {
        return res.render('user/profile');
    },
    logout: (req, res) => {
        // Do the magic
        return res.redirect('/');
    }

}