const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const appRoutes = require('./Routes/appRoutes')

app.use(cors());

app.use(bodyparser.urlencoded({extended: false}));

app.use(bodyparser.json());

app.use('/', appRoutes);
app.use('/users', appRoutes);
app.use('/shows', appRoutes);
app.use('/users/:id', appRoutes);
app.use('/shows/:id', appRoutes);
app.use('/user/adduser', appRoutes);
app.use('/show/addshow', appRoutes);
app.use('/users/post', appRoutes);
app.use('/postusers', appRoutes);
app.use('/postshows', appRoutes);
app.use('/postcomments', appRoutes);

module.exports = {app ,}