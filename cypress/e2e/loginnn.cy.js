describe('Автотесты авторизация', function () {

   it('Позитивный кейс,верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type ('german@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should ('be.disabled'); // кнопка некликабельна
        cy.get('#pass').type ('iLoveqastudio1'); // ввёл пароль
        cy.get('#loginButton').should ('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').should ('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains ('Авторизация прошла успешно'); // проверка текста 
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // в углу есть крестик
      })

   it('Негативный кейс,верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type ('german@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should ('be.disabled'); // кнопка некликабельна
        cy.get('#pass').type ('iLoveqastudio12'); // ввёл пароль
        cy.get('#loginButton').should ('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').should ('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains ('Такого логина или пароля нет'); // проверка текста 
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // в углу есть крестик
      })

   it('Негативный кейс,неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type ('erman@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should ('be.disabled'); // кнопка некликабельна
        cy.get('#pass').type ('iLoveqastudio1'); // ввёл пароль
        cy.get('#loginButton').should ('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').should ('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains ('Такого логина или пароля нет'); // проверка текста 
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // в углу есть крестик
      })

   it('Проверка фичи,"Забыли пароль"', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').click(); // нажать забыл пароль
        cy.get('#mailForgot').type ('german@dolnikov.ru'); // ввел почту
        cy.get('#restoreEmailButton').click(); // кликнул Отправить код

        cy.get('#messageHeader').should ('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail'); // проверка текста 
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // в углу есть крестик
      })

   it('Позитивный кейс,верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type ('germandolnikov.ru'); // ввел логин без @
        cy.get('#loginButton').should ('be.disabled'); // кнопка некликабельна
        cy.get('#pass').type ('iLoveqastudio1'); // ввёл пароль
        cy.get('#loginButton').should ('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').should ('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains ('Нужно исправить проблему валидации'); // проверка текста 
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // в углу есть крестик
      })

   it('Позитивный кейс,верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#mail').type ('GerMan@Dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should ('be.disabled'); // кнопка некликабельна
        cy.get('#pass').type ('iLoveqastudio1'); // ввёл пароль
        cy.get('#loginButton').should ('be.enabled'); // кнопка кликабельна
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').should ('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains ('Авторизация прошла успешно'); // проверка текста 
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // в углу есть крестик
      })

})
