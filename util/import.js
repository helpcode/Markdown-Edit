const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('config-lite')(__dirname);
const fileBase = require('./file');
const file = new fileBase();

module.exports = {express, router, config, path, file};