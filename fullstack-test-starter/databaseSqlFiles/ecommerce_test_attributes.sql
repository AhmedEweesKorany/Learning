-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce_test
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attributes`
--

DROP TABLE IF EXISTS `attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attributes` (
  `db_id` int NOT NULL AUTO_INCREMENT,
  `id` varchar(50) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `items` json DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`db_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attributes`
--

LOCK TABLES `attributes` WRITE;
/*!40000 ALTER TABLE `attributes` DISABLE KEYS */;
INSERT INTO `attributes` VALUES (1,'Size','huarache-x-stussy-le','[{\"id\": \"40\", \"value\": \"40\", \"__typename\": \"Attribute\", \"displayValue\": \"40\"}, {\"id\": \"41\", \"value\": \"41\", \"__typename\": \"Attribute\", \"displayValue\": \"41\"}, {\"id\": \"42\", \"value\": \"42\", \"__typename\": \"Attribute\", \"displayValue\": \"42\"}, {\"id\": \"43\", \"value\": \"43\", \"__typename\": \"Attribute\", \"displayValue\": \"43\"}]','Size','text'),(2,'Size','jacket-canada-goosee','[{\"id\": \"Small\", \"value\": \"S\", \"__typename\": \"Attribute\", \"displayValue\": \"Small\"}, {\"id\": \"Medium\", \"value\": \"M\", \"__typename\": \"Attribute\", \"displayValue\": \"Medium\"}, {\"id\": \"Large\", \"value\": \"L\", \"__typename\": \"Attribute\", \"displayValue\": \"Large\"}, {\"id\": \"Extra Large\", \"value\": \"XL\", \"__typename\": \"Attribute\", \"displayValue\": \"Extra Large\"}]','Size','text'),(3,'Color','ps-5','[{\"id\": \"Green\", \"value\": \"#44FF03\", \"__typename\": \"Attribute\", \"displayValue\": \"Green\"}, {\"id\": \"Cyan\", \"value\": \"#03FFF7\", \"__typename\": \"Attribute\", \"displayValue\": \"Cyan\"}, {\"id\": \"Blue\", \"value\": \"#030BFF\", \"__typename\": \"Attribute\", \"displayValue\": \"Blue\"}, {\"id\": \"Black\", \"value\": \"#000000\", \"__typename\": \"Attribute\", \"displayValue\": \"Black\"}, {\"id\": \"White\", \"value\": \"#FFFFFF\", \"__typename\": \"Attribute\", \"displayValue\": \"White\"}]','Color','swatch'),(4,'Capacity','ps-5','[{\"id\": \"512G\", \"value\": \"512G\", \"__typename\": \"Attribute\", \"displayValue\": \"512G\"}, {\"id\": \"1T\", \"value\": \"1T\", \"__typename\": \"Attribute\", \"displayValue\": \"1T\"}]','Capacity','text'),(5,'Color','xbox-series-s','[{\"id\": \"Green\", \"value\": \"#44FF03\", \"__typename\": \"Attribute\", \"displayValue\": \"Green\"}, {\"id\": \"Cyan\", \"value\": \"#03FFF7\", \"__typename\": \"Attribute\", \"displayValue\": \"Cyan\"}, {\"id\": \"Blue\", \"value\": \"#030BFF\", \"__typename\": \"Attribute\", \"displayValue\": \"Blue\"}, {\"id\": \"Black\", \"value\": \"#000000\", \"__typename\": \"Attribute\", \"displayValue\": \"Black\"}, {\"id\": \"White\", \"value\": \"#FFFFFF\", \"__typename\": \"Attribute\", \"displayValue\": \"White\"}]','Color','swatch'),(6,'Capacity','xbox-series-s','[{\"id\": \"512G\", \"value\": \"512G\", \"__typename\": \"Attribute\", \"displayValue\": \"512G\"}, {\"id\": \"1T\", \"value\": \"1T\", \"__typename\": \"Attribute\", \"displayValue\": \"1T\"}]','Capacity','text'),(7,'Capacity','apple-imac-2021','[{\"id\": \"256GB\", \"value\": \"256GB\", \"__typename\": \"Attribute\", \"displayValue\": \"256GB\"}, {\"id\": \"512GB\", \"value\": \"512GB\", \"__typename\": \"Attribute\", \"displayValue\": \"512GB\"}]','Capacity','text'),(8,'With USB 3 ports','apple-imac-2021','[{\"id\": \"Yes\", \"value\": \"Yes\", \"__typename\": \"Attribute\", \"displayValue\": \"Yes\"}, {\"id\": \"No\", \"value\": \"No\", \"__typename\": \"Attribute\", \"displayValue\": \"No\"}]','With USB 3 ports','text'),(9,'Touch ID in keyboard','apple-imac-2021','[{\"id\": \"Yes\", \"value\": \"Yes\", \"__typename\": \"Attribute\", \"displayValue\": \"Yes\"}, {\"id\": \"No\", \"value\": \"No\", \"__typename\": \"Attribute\", \"displayValue\": \"No\"}]','Touch ID in keyboard','text'),(10,'Capacity','apple-iphone-12-pro','[{\"id\": \"512G\", \"value\": \"512G\", \"__typename\": \"Attribute\", \"displayValue\": \"512G\"}, {\"id\": \"1T\", \"value\": \"1T\", \"__typename\": \"Attribute\", \"displayValue\": \"1T\"}]','Capacity','text'),(11,'Color','apple-iphone-12-pro','[{\"id\": \"Green\", \"value\": \"#44FF03\", \"__typename\": \"Attribute\", \"displayValue\": \"Green\"}, {\"id\": \"Cyan\", \"value\": \"#03FFF7\", \"__typename\": \"Attribute\", \"displayValue\": \"Cyan\"}, {\"id\": \"Blue\", \"value\": \"#030BFF\", \"__typename\": \"Attribute\", \"displayValue\": \"Blue\"}, {\"id\": \"Black\", \"value\": \"#000000\", \"__typename\": \"Attribute\", \"displayValue\": \"Black\"}, {\"id\": \"White\", \"value\": \"#FFFFFF\", \"__typename\": \"Attribute\", \"displayValue\": \"White\"}]','Color','swatch');
/*!40000 ALTER TABLE `attributes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-07 23:55:21
