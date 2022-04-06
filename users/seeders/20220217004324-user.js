'use strict';

const generated_users = require(__dirname + '/../seeder_assets/generated_data_user.json')['objects'];

function generateSeeds() {
  var userData = [];
  for(let i = 0; i < generated_users.length; i++) {
    userData.push({
      id: i,
      Name: generated_users[i]['Name'],
      Email: generated_users[i]['Email'],
      Password: 'password#'+ i.toString(),
      PermissionHex: 'FFFFFF',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  }
  return userData;
}

/*
id:
Name:
Email:
Password:
PermissionHex:
createdAt:
updatedAt:
*/

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User', generateSeeds(), {});
    console.log("seeded 'User' successfully...")
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('User', null, {});
    console.log("deleted 'User' seeds successfully...");
  }
};
