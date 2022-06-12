const express = require('express');
const endDatesRoute = require('./endDates')
const userRoute = require('./user')
const highScoresRoute = require('./highScores')
const configurationRoute = require('./configuration')
const adminRoute = require('./admin');
const router = express.Router();

const defaultRoutes = [


    {
        path: '/dates',
        route: endDatesRoute,
      },
      {
        path: '/user',
        route: userRoute
      },
      {
        path: '/highScores',
        route: highScoresRoute
      },
      {
        path: '/configuration',
        route: configurationRoute
      },
      {
        path: '/admin',
        route: adminRoute
      },


]



defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });


  module.exports = router;
