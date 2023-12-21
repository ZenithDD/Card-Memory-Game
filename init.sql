CREATE DATABASE IF NOT EXISTS card_db DEFAULT CHARACTER SET = utf8mb4;

USE card_db;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
                           `ID` bigint(20) AUTO_INCREMENT NOT NULL COMMENT '主键',
                           `USERNAME` varchar(50) NOT NULL COMMENT '用户名',
                           `PASSWORD` varchar(50) NOT NULL COMMENT '密码',
                           PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `rank`;
CREATE TABLE `rank` (
                          `ID` bigint(20) AUTO_INCREMENT NOT NULL COMMENT '主键',
                          `USERNAME` varchar(50) NOT NULL COMMENT '用户名',
                          `DIFFICULTY` INT NOT NULL COMMENT '难度',
                          `TIME_COST` INT NOT NULL COMMENT '用时',
                          `TIMESTAMP` bigint(10) NOT NULL COMMENT '时间',
                          PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;