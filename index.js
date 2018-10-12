const { logger } = require('afiliados-logger')

module.exports = {
  // Wrap route functions repassing exceptions to error handling
  wrapAsync(fn) {
    return (req, res, next) => {
      fn(req, res, next).catch(next)
    }
  },

  errorHandler(err, req, res, next) {
    logger.error(err)
    res.status(400).json({
      message: err.message,
    })
    next()
  }
}