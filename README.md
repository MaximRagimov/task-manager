# task-manager

## Описание

Это простое веб-приложение для управления задачами, созданное с использованием Node.js, Express, TypeScript и PostgreSQL. Приложение позволяет пользователю создавать, редактировать, удалять и просматривать задачи.

## Функции

- Создание новой задачи
- Просмотр списка всех задач
- Просмотр задачи по ID
- Обновление задачи по ID
- Удаление задачи по ID

## Требования

- Node.js
- PostgreSQL
- Git

## Установка

### 1. Клонирование репозитория

Склонируйте репозиторий с GitHub:

```
bash
git clone https://github.com/username/task-manager.git
cd task-manager
```


### 2. Установка зависимостей

```npm install```

### 3. Настройка БД

Подключение к PostgreSQL
```psql -U postgres```

Создание БД и пользователя
```
CREATE DATABASE taskdb;
CREATE USER taskuser WITH ENCRYPTED PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE taskdb TO taskuser;
```

### 4. Конфигурация приложения

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskdb
DB_USER=taskuser
DB_PASSWORD=password
PORT=3000
```

### 5. Запуск миграций

```npx sequelize-cli db:migrate```

### 6. Запуск приложения

```npm start```
