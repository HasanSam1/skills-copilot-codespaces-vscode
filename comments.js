// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create server
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Data
const comments = [
  {
    id: 1,