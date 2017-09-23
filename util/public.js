const express = require('express');
const router = express.Router();
const path = require('path');
const yml = require('./../config/yml').ReturnYml();
const fileBase = require('./fileBase');
const file = new fileBase();

module.exports = {express, router, yml, path, file};