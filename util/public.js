const express = require('express');
const router = express.Router();
const path = require('path');
const yml = require('./../config/yml').ReturnYml();

module.exports = {express, router, yml, path};