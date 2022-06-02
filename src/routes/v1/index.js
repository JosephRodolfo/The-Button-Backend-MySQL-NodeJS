const express = require('express');
const endDatesRoute = require('./endDates')
const userRoute = require('./user')
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


]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

  module.exports = router;
