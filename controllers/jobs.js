const data = require('../data.json')

exports.getJobs = (req, res) => {
    res.json({data});
}