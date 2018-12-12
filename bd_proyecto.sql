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
-- Table `bd_proyecto`.`Redes Sociales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`Redes Sociales` (
  `Id_Red_Social` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Red_Social` VARCHAR(45) NULL,
  PRIMARY KEY (`Id_Red_Social`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`Usuarios` (
  `Id_Usuario` INT NOT NULL AUTO_INCREMENT,
  `Nombres_Usuarios` VARCHAR(45) NOT NULL,
  `Apellidos_Usuarios` VARCHAR(45) NOT NULL,
  `Correo_usuario` VARCHAR(45) NOT NULL,
  `Contrasena` VARCHAR(45) NOT NULL,
  `Genero` ENUM('M', 'F') NOT NULL,
  `Plan` ENUM('Gratis', 'Normal', 'Premium') NULL,
  PRIMARY KEY (`Id_Usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`Carpetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`Carpetas` (
  `Id_carpeta` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Carpeta` VARCHAR(45) NULL,
  PRIMARY KEY (`Id_carpeta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`Archivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`Archivos` (
  `Id_archivo` INT NOT NULL,
  `Nombre_archivo` VARCHAR(45) NULL,
  PRIMARY KEY (`Id_archivo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`Usuarios_has_Redes Sociales1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`Usuarios_has_Redes Sociales1` (
  `Usuarios_Id_Usuario` INT NOT NULL,
  `Redes Sociales_Id_Red_Social` INT NOT NULL,
  PRIMARY KEY (`Usuarios_Id_Usuario`, `Redes Sociales_Id_Red_Social`),
  INDEX `fk_Usuarios_has_Redes Sociales1_Redes Sociales1_idx` (`Redes Sociales_Id_Red_Social` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Redes Sociales1_Usuarios1_idx` (`Usuarios_Id_Usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Redes Sociales1_Usuarios1`
    FOREIGN KEY (`Usuarios_Id_Usuario`)
    REFERENCES `bd_proyecto`.`Usuarios` (`Id_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Redes Sociales1_Redes Sociales1`
    FOREIGN KEY (`Redes Sociales_Id_Red_Social`)
    REFERENCES `bd_proyecto`.`Redes Sociales` (`Id_Red_Social`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`Usuarios_has_Carpetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`Usuarios_has_Carpetas` (
  `Usuarios_Id_Usuario` INT NOT NULL,
  `Carpetas_Id_carpeta` INT NOT NULL,
  PRIMARY KEY (`Usuarios_Id_Usuario`, `Carpetas_Id_carpeta`),
  INDEX `fk_Usuarios_has_Carpetas_Carpetas1_idx` (`Carpetas_Id_carpeta` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Carpetas_Usuarios1_idx` (`Usuarios_Id_Usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Carpetas_Usuarios1`
    FOREIGN KEY (`Usuarios_Id_Usuario`)
    REFERENCES `bd_proyecto`.`Usuarios` (`Id_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Carpetas_Carpetas1`
    FOREIGN KEY (`Carpetas_Id_carpeta`)
    REFERENCES `bd_proyecto`.`Carpetas` (`Id_carpeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_proyecto`.`Carpetas_has_Archivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_proyecto`.`Carpetas_has_Archivos` (
  `Carpetas_Id_carpeta` INT NOT NULL,
  `Archivos_Id_archivo` INT NOT NULL,
  PRIMARY KEY (`Carpetas_Id_carpeta`, `Archivos_Id_archivo`),
  INDEX `fk_Carpetas_has_Archivos_Archivos1_idx` (`Archivos_Id_archivo` ASC) VISIBLE,
  INDEX `fk_Carpetas_has_Archivos_Carpetas1_idx` (`Carpetas_Id_carpeta` ASC) VISIBLE,
  CONSTRAINT `fk_Carpetas_has_Archivos_Carpetas1`
    FOREIGN KEY (`Carpetas_Id_carpeta`)
    REFERENCES `bd_proyecto`.`Carpetas` (`Id_carpeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Carpetas_has_Archivos_Archivos1`
    FOREIGN KEY (`Archivos_Id_archivo`)
    REFERENCES `bd_proyecto`.`Archivos` (`Id_archivo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
