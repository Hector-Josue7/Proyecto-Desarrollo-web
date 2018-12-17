-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bd_whatsapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bd_whatsapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd_whatsapp` DEFAULT CHARACTER SET latin1 ;
USE `bd_whatsapp` ;

-- -----------------------------------------------------
-- Table `bd_whatsapp`.`tbl_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_whatsapp`.`tbl_usuarios` (
  `codigo_usuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(300) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `url_imagen_perfil` VARCHAR(500) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  PRIMARY KEY (`codigo_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_whatsapp`.`tbl_contactos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_whatsapp`.`tbl_contactos` (
  `codigo_usuario` INT(11) NOT NULL,
  `codigo_usuario_contacto` INT(11) NOT NULL,
  INDEX `fk_tbl_amigos_tbl_usuarios_idx` (`codigo_usuario` ASC) VISIBLE,
  INDEX `fk_tbl_amigos_tbl_usuarios1_idx` (`codigo_usuario_contacto` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_amigos_tbl_usuarios`
    FOREIGN KEY (`codigo_usuario`)
    REFERENCES `bd_whatsapp`.`tbl_usuarios` (`codigo_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_amigos_tbl_usuarios1`
    FOREIGN KEY (`codigo_usuario_contacto`)
    REFERENCES `bd_whatsapp`.`tbl_usuarios` (`codigo_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bd_whatsapp`.`tbl_mensajes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_whatsapp`.`tbl_mensajes` (
  `codigo_usuario_emisor` INT(11) NOT NULL,
  `codigo_usuario_receptor` INT(11) NOT NULL,
  `mensaje` VARCHAR(1000) NOT NULL,
  `hora_mensaje` VARCHAR(45) NOT NULL,
  INDEX `fk_tbl_comentarios_tbl_usuarios1_idx` (`codigo_usuario_emisor` ASC) VISIBLE,
  INDEX `fk_tbl_mensajes_tbl_usuarios1_idx` (`codigo_usuario_receptor` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_comentarios_tbl_usuarios1`
    FOREIGN KEY (`codigo_usuario_emisor`)
    REFERENCES `bd_whatsapp`.`tbl_usuarios` (`codigo_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_mensajes_tbl_usuarios1`
    FOREIGN KEY (`codigo_usuario_receptor`)
    REFERENCES `bd_whatsapp`.`tbl_usuarios` (`codigo_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
