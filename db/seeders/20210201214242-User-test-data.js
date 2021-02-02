"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [
            {
                firstName: "Robert",
                lastName: "Cole",
                email: "robe@gmail.com",
                hashedPassword: "robert1234",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: "Alex",
                lastName: "Ball",
                email: "alex@gmail.com",
                hashedPassword: "alex1234",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: "Tom",
                lastName: "Harris",
                email: "tom@gmail.com",
                hashedPassword: "tom1234",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
