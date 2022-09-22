const { request, response, next } = require('express');
const { validationResult } = require('express-validator');

const validationErrors = (request, response, next) => {
    const validationFormat = validationResult.withDefaults({
        formatter: error => {
          return {
            msg: error.msg,
            location: error.location
          };
        },
    });
    
    const errors = validationFormat(request).array()

    if(errors.length>0) return response.status(400).json({
        msg: `${errors.length} errors have been found`,
        errors
    })

    next()
}

module.exports = {validationErrors}