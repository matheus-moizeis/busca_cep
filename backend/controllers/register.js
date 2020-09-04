const controller = {}

controller.get = (req, res) => {
    res.send('Get')
}

controller.getOne = (req, res) => {
    res.send('GetOne')
}

controller.post = (req, res) => {
    res.send('post')
}

controller.put = (req, res) => {
    res.send('Put')
}

controller.delete = (req, res) => {
    res.send('delete')
}

module.exports = controller