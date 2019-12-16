/*
Navicat MySQL Data Transfer

Source Server         : localhost_3307
Source Server Version : 80018
Source Host           : localhost:3307
Source Database       : home

Target Server Type    : MYSQL
Target Server Version : 80018
File Encoding         : 65001

Date: 2019-12-16 18:30:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for animation_list
-- ----------------------------
DROP TABLE IF EXISTS `animation_list`;
CREATE TABLE `animation_list` (
  `id` int(11) NOT NULL,
  `animationid` int(11) DEFAULT NULL,
  `animation` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of animation_list
-- ----------------------------
INSERT INTO `animation_list` VALUES ('1', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '1');
INSERT INTO `animation_list` VALUES ('2', '1', 'sfs', 'images/video-pic1.png', '视频简介视频简介', '2');
INSERT INTO `animation_list` VALUES ('3', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '3');
INSERT INTO `animation_list` VALUES ('4', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '4');
INSERT INTO `animation_list` VALUES ('5', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '5');
INSERT INTO `animation_list` VALUES ('6', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '6');
INSERT INTO `animation_list` VALUES ('7', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '7');
INSERT INTO `animation_list` VALUES ('8', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '0');
INSERT INTO `animation_list` VALUES ('9', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '0');
INSERT INTO `animation_list` VALUES ('10', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '22');
INSERT INTO `animation_list` VALUES ('11', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '222');
INSERT INTO `animation_list` VALUES ('12', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '44');
INSERT INTO `animation_list` VALUES ('13', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '33');
INSERT INTO `animation_list` VALUES ('14', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '0');
INSERT INTO `animation_list` VALUES ('15', '1', 'sfsf', 'images/video-pic1.png', '视频简介视频简介', '0');

-- ----------------------------
-- Table structure for draw_list
-- ----------------------------
DROP TABLE IF EXISTS `draw_list`;
CREATE TABLE `draw_list` (
  `id` int(11) NOT NULL,
  `picId` int(11) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `iTime` datetime DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of draw_list
-- ----------------------------
INSERT INTO `draw_list` VALUES ('1', '1', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', 'draw');
INSERT INTO `draw_list` VALUES ('2', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('3', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('4', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('5', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('6', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('7', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('8', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('9', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('10', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('11', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('12', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('13', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('14', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('15', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('16', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('17', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('18', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('19', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('20', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('21', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `draw_list` VALUES ('22', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');

-- ----------------------------
-- Table structure for video_list
-- ----------------------------
DROP TABLE IF EXISTS `video_list`;
CREATE TABLE `video_list` (
  `id` int(11) NOT NULL,
  `picId` int(11) DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `alt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `iTime` datetime DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of video_list
-- ----------------------------
INSERT INTO `video_list` VALUES ('1', '1', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽1', '0', '视频/壁纸', '2019-11-19 15:44:03', 'draw');
INSERT INTO `video_list` VALUES ('2', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽1', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('3', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽1', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('4', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽1', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('5', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽1', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('6', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('7', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('8', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('9', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('10', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('11', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('12', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('13', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('14', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('15', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('16', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('17', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('18', '2', 'images/pic2.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('19', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('20', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('21', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
INSERT INTO `video_list` VALUES ('22', '2', 'images/pic1.png', '童话系列扉页之夜莺与玫瑰', '白泽', '0', '视频/壁纸', '2019-11-19 15:44:03', '2');
