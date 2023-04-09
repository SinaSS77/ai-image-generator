const express = require('express');
const {generateImage} = require ('../apiHelper/openaiController.js')
const router = express.Router();

router.post('/generateImage',generateImage);



module.exports= router;