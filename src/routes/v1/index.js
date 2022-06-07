const express = require('express');
const endDatesRoute = require('./endDates')
const userRoute = require('./user')
const highScoresRoute = require('./highScores')
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


]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

  module.exports = router;
