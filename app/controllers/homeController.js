function homeController() {
    return {
        home(req, res) {
            res.render('layout');
        },
    }
}

module.exports = homeController;