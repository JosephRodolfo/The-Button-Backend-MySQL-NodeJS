USE enddate;

CREATE TABLE administration (
  	id int(11) NOT NULL AUTO_INCREMENT,
	password varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	role varchar(255) default "admin",
  	PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;
 SET time_zone='+00:00';
