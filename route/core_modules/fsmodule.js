const express = require("express");
const router = express.Router();
const {createFiles,appendModules} = require('../../controller/core_modules/fsmodule');

router.route('/create-file').post(createFiles);
router.route('/append-file').post(appendModules);

module.exports = router;


