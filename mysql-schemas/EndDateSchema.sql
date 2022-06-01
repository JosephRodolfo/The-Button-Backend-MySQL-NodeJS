CREATE DATABASE enddate CHARACTER SET utf8 COLLATE utf8_general_ci;
USE enddate;

CREATE TABLE dates (
  id int(11) NOT NULL AUTO_INCREMENT,
	name varchar(50),
	datedata int(11),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO dates (id, name, datedata) VALUES
(1, "enddate", 1234567);