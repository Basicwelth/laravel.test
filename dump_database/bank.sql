-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 02 2022 г., 11:13
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bank`
--

-- --------------------------------------------------------

--
-- Структура таблицы `client_contribution`
--

CREATE TABLE `client_contribution` (
  `id` bigint NOT NULL,
  `lastname` varchar(50) NOT NULL COMMENT 'Фамилия клиента',
  `firstname` varchar(50) NOT NULL COMMENT 'Имя клиента',
  `surname` varchar(50) NOT NULL COMMENT 'Отчество клиента',
  `inn` text NOT NULL COMMENT 'ИНН клиента',
  `birthday` text NOT NULL COMMENT 'Дата рождения клиента',
  `passNum` text NOT NULL COMMENT 'Серия и номер паспорта',
  `passDate` text NOT NULL COMMENT 'Дата выдачи паспорта',
  `rate` decimal(6,6) NOT NULL COMMENT 'Ставка',
  `startDate` text NOT NULL COMMENT 'Дата открытия',
  `finDate` text NOT NULL COMMENT 'Дата закрытия',
  `period` int NOT NULL COMMENT 'Срок вклада',
  `pay` tinyint(1) NOT NULL COMMENT 'Периодичность капитализации',
  `amount` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Количество сбережений'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `client_credit`
--

CREATE TABLE `client_credit` (
  `id` bigint NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Имя',
  `firstname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Фамилия',
  `surname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Отчество',
  `inn` text NOT NULL COMMENT 'ИНН клиента',
  `birthday` text NOT NULL COMMENT 'Дата рождения клиента',
  `passNum` text NOT NULL COMMENT 'Серия и номер паспорта',
  `passDate` text NOT NULL COMMENT 'Дата выдачи паспорта',
  `amount` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Сумма кредита',
  `pay` tinyint(1) NOT NULL COMMENT 'Вид платежа(0-анну,1-дифф)',
  `startDate` text NOT NULL COMMENT 'Дата открытия',
  `finDate` text NOT NULL COMMENT 'Дата закрытия',
  `period` int NOT NULL COMMENT 'Срок выплаты',
  `rate` decimal(10,8) DEFAULT NULL COMMENT 'Процент'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `entity_credit`
--

CREATE TABLE `entity_credit` (
  `id` bigint NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Фамилия',
  `firstname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Имя',
  `surname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Отчество',
  `inn` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'ИНН владельца',
  `orgName` text NOT NULL COMMENT 'Название организации',
  `address` text NOT NULL COMMENT 'Адрес организации',
  `ogrn` varchar(14) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'ОГРН организации',
  `innOrg` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'ИНН организации',
  `kppOrg` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'КПП организации',
  `amount` text NOT NULL COMMENT 'Сумма кредита',
  `pay` tinyint(1) NOT NULL COMMENT 'Вид платежа(0-анну,1-дифф)',
  `startDate` text NOT NULL COMMENT 'Дата открытия',
  `finDate` text NOT NULL COMMENT 'Дата закрытия',
  `period` int NOT NULL COMMENT 'Срок выплаты',
  `rate` decimal(10,8) DEFAULT NULL COMMENT 'Процент'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `client_contribution`
--
ALTER TABLE `client_contribution`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `client_credit`
--
ALTER TABLE `client_credit`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `entity_credit`
--
ALTER TABLE `entity_credit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `client_contribution`
--
ALTER TABLE `client_contribution`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `client_credit`
--
ALTER TABLE `client_credit`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `entity_credit`
--
ALTER TABLE `entity_credit`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
