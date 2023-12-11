const express = require('./config/express');
const { logger } = require('./config/winston');

const port = 3000;
const serverURL = 'http://34.64.121.98';

express().listen(port);

logger.info(`${process.env.NODE_ENV} - API Server Start At ${serverURL}:${port}`);
