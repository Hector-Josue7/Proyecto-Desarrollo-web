-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bd_proyecto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bd_proyecto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd_proyecto` DEFAULT CHARACTER SET utf8 ;
USE `bd_proyecto` ;

-- -----------------------------------------------------
-- Table `bd_proyecto`.`USUARIOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`USUARIOS` (
  `ID_USUARIO` INT NOT NULL AUTO_INCREMENT,
  `NOMBRE` VARCHAR(100) NOT NULL,
  `APELLIDO` VARCHAR(100) NOT NULL,
  `CORREO` VARCHAR(100) NOT NULL,
  `CONTRASENA` VARCHAR(100) NOT NULL,
  `FECHA_NACIMIENTO` DATE NULL,
  `PLAN` ENUM('Gratis', 'Normal', 'Premium') NULL,
  PRIMARY KEY (`ID_USUARIO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`CARPETAS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`CARPETAS` (
  `ID_CARPETA` INT NOT NULL,
  `NOMBRE_CARPETA` VARCHAR(50) NULL,
  `USUARIOS_ID_USUARIO` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID_CARPETA`),
  CONSTRAINT `fk_CARPETAS_USUARIOS`
    FOREIGN KEY (`USUARIOS_ID_USUARIO`)
    REFERENCES `bd_proyecto`.`USUARIOS` (`ID_USUARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`PROYECTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`PROYECTOS` (
  `ID_PROYECTO` INT NOT NULL AUTO_INCREMENT,
  `NOMBRE_PROYECTO` VARCHAR(100) NULL,
  `USUARIOS_ID_USUARIO` INT NOT NULL,
  PRIMARY KEY (`ID_PROYECTO`),
  CONSTRAINT `fk_PROYECTOS_USUARIOS1`
    FOREIGN KEY (`USUARIOS_ID_USUARIO`)
    REFERENCES `bd_proyecto`.`USUARIOS` (`ID_USUARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`REDES_SOCIALES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`REDES_SOCIALES` (
  `ID_RED_SOCIAL` INT NOT NULL AUTO_INCREMENT,
  `NOMBRE_RED_SOCIAL` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_RED_SOCIAL`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`USUARIOS_has_REDES_SOCIALES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`USUARIOS_has_REDES_SOCIALES` (
  `USUARIOS_ID_USUARIO` INT NOT NULL,
  `REDES_SOCIALES_ID_RED_SOCIAL` INT NOT NULL,
  PRIMARY KEY (`USUARIOS_ID_USUARIO`, `REDES_SOCIALES_ID_RED_SOCIAL`),
  CONSTRAINT `fk_USUARIOS_has_REDES_SOCIALES_USUARIOS1`
    FOREIGN KEY (`USUARIOS_ID_USUARIO`)
    REFERENCES `bd_proyecto`.`USUARIOS` (`ID_USUARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_USUARIOS_has_REDES_SOCIALES_REDES_SOCIALES1`
    FOREIGN KEY (`REDES_SOCIALES_ID_RED_SOCIAL`)
    REFERENCES `bd_proyecto`.`REDES_SOCIALES` (`ID_RED_SOCIAL`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
