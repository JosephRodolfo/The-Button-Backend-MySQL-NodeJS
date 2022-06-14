USE enddate;

CREATE TABLE configuration (
  	id int(11) NOT NULL AUTO_INCREMENT,
	speed int(11) NOT NULL,
	callFrequency int(11) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;
 SET time_zone='+04:00';

 INSERT INTO configuration (id, speed, callFrequency) VALUES
(1, 1000000, 2000);