const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const taskValidations = (task, statusTask) => {
  const { error } = Joi.object(
    {
      task: Joi.string().required().not().empty(),
      statusTask: Joi.string().required().not().empty()
        .max(15),
    },
  ).validate({ task, statusTask });

  if (error) {
    return {
      message: error.details[0].message,
      code: StatusCodes.UNPROCESSABLE_ENTITY,
    };
  }

  return true;
};

module.exports = { taskValidations };
