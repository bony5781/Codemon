const errorHandler = (err, req, res, next) => {

    if (err.name === "ValidationError") {
        return res.status(400).send({
            type: "Validation Error",
            details: err.details
        })
    }

    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
}

module.exports = errorHandler;