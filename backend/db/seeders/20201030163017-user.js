'use strict';

const { requireAuth } = require('../../utils/auth');

const bcrypt = require('bcryptjs');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					first_name: 'Hodayah',
					last_name: 'Pinsky',
					email: 'hodayahb@gmail,com',
					zip: '33180',
					hashed_pass: bcrypt.hashSync('password'),
					HomeChefId: 1,
				},
				{
					email: 'Moshe44@yahoo.com',
					first_name: 'Kayleigh',
					last_name: 'Runolfsson',
					hashed_pass: bcrypt.hashSync('bZauImM5GA71Ve9'),
					zip: '61917',
					HomeChefId: 2,
				},
				{
					email: 'Ocie_Hermann88@gmail.com',
					first_name: 'Adriana',
					last_name: 'Crooks',
					hashed_pass: bcrypt.hashSync('OUwBnJQu9Zk0cK3'),
					zip: '76503',
					HomeChefId: 3,
				},
				{
					email: 'Dessie0@yahoo.com',
					first_name: 'Sigmund',
					last_name: "O'Conner",
					hashed_pass: bcrypt.hashSync('Yjgrj7Xj2XjMDZX'),
					zip: '17368',
					HomeChefId: 4,
				},
				{
					email: 'Richard.Klocko87@yahoo.com',
					first_name: 'Ahmed',
					last_name: 'Bins',
					hashed_pass: bcrypt.hashSync('Hyp7h6ZGBae2Jy0'),
					zip: '42088',
					HomeChefId: 5,
				},
				{
					email: 'Name74@yahoo.com',
					first_name: 'Elda',
					last_name: 'Ferry',
					hashed_pass: bcrypt.hashSync('un5yaJIx09bnXdl'),
					zip: '16093',
					HomeChefId: 6,
				},
				{
					email: 'Katharina_Herman73@yahoo.com',
					first_name: 'Cristina',
					last_name: 'Rice',
					hashed_pass: bcrypt.hashSync('PpfvGGhmIEqi_8b'),
					zip: '66165',
					HomeChefId: 7,
				},
				{
					email: 'Giovani46@gmail.com',
					first_name: 'Casey',
					last_name: 'Block',
					hashed_pass: bcrypt.hashSync('11UiGd2coA31WM5'),
					zip: '33081',
					HomeChefId: 8,
				},
				{
					email: 'Rubye.Larkin90@yahoo.com',
					first_name: 'Jeffery',
					last_name: 'Berge',
					hashed_pass: bcrypt.hashSync('f9QRBkD74b8sshY'),
					zip: '48524',
					HomeChefId: 9,
				},
				{
					email: 'Eugene_West@hotmail.com',
					first_name: 'Newell',
					last_name: 'White',
					hashed_pass: bcrypt.hashSync('Qd4Gzl2EYSoPy_V'),
					zip: '78032',
					HomeChefId: 10,
				},
				{
					email: 'Myrl_Lebsack@hotmail.com',
					first_name: 'Guy',
					last_name: 'Kunze',
					hashed_pass: bcrypt.hashSync('VqePvwUY4r_KZuZ'),
					zip: '04146',
					HomeChefId: 11,
				},
				{
					email: 'Odie61@gmail.com',
					first_name: 'Carmine',
					last_name: 'Reinger',
					hashed_pass: bcrypt.hashSync('paVd0yAW5psoYHM'),
					zip: '91400',
					HomeChefId: 12,
				},
				{
					email: 'Luis.Skiles@hotmail.com',
					first_name: 'Giuseppe',
					last_name: 'Wisoky',
					hashed_pass: bcrypt.hashSync('9OAx9HGX0UU5CKK'),
					zip: '78323',
					HomeChefId: 13,
				},
				{
					email: 'Mathias.Kshlerin97@hotmail.com',
					first_name: 'Ocie',
					last_name: 'Jacobs',
					hashed_pass: bcrypt.hashSync('vMGNBqDJvXhlv9a'),
					zip: '51334',
					HomeChefId: 14,
				},
				{
					email: 'Sunny84@gmail.com',
					first_name: 'Veda',
					last_name: 'Pfeffer',
					hashed_pass: bcrypt.hashSync('6opb2NNZ0wAK_3x'),
					zip: '80852',
					HomeChefId: 15,
				},
				{
					email: 'Malachi_Casper78@gmail.com',
					first_name: 'Caesar',
					last_name: 'Bednar',
					hashed_pass: bcrypt.hashSync('y3FgzK9RMPiOCRv'),
					zip: '15179',
					HomeChefId: 16,
				},
				{
					email: 'Hyman.Spinka15@gmail.com',
					first_name: 'Alvena',
					last_name: 'Collins',
					hashed_pass: bcrypt.hashSync('l6zO63dDe6PEhNw'),
					zip: '29797',
					HomeChefId: 17,
				},
				{
					email: 'Ivah45@yahoo.com',
					first_name: 'Gwen',
					last_name: 'Russel',
					hashed_pass: bcrypt.hashSync('JvSmUd3KBg3rZIo'),
					zip: '22784',
					HomeChefId: 18,
				},
				{
					email: 'Coty_Sanford@gmail.com',
					first_name: 'Junius',
					last_name: 'Huel',
					hashed_pass: bcrypt.hashSync('AmmiLvpxWdkLlDQ'),
					zip: '89713',
					HomeChefId: 19,
				},
				{
					email: 'Sally.Lueilwitz@hotmail.com',
					first_name: 'Ruthie',
					last_name: 'Ruecker',
					hashed_pass: bcrypt.hashSync('zPhFiY81J_4ls8t'),
					zip: '98442',
					HomeChefId: 20,
				},
				{
					email: 'Julia.Lowe45@gmail.com',
					first_name: 'Rylee',
					last_name: 'Toy',
					hashed_pass: bcrypt.hashSync('tJj2X_cedQyLPM6'),
					zip: '95025',
					HomeChefId: 21,
				},
				{
					email: 'demo@user.io',
					first_name: 'Demo',
					last_name: 'User',
					zip: '33180',
					hashed_pass: bcrypt.hashSync('password'),
					HomeChefId: null,
				},
				{
					email: 'Dell.Schuppe@yahoo.com',
					first_name: 'Lukas',
					last_name: 'Feil',
					hashed_pass: bcrypt.hashSync('Mv30RyCwZpLiGHK'),
					zip: '49361',
				},
				{
					email: 'Gayle87@yahoo.com',
					first_name: 'Vicenta',
					last_name: 'Weissnat',
					hashed_pass: "bcrypt.hashSync('K4yFx57MvV6uNrH')",
					zip: '25020',
				},
				{
					email: 'Claire22@gmail.com',
					first_name: 'Isaiah',
					last_name: 'Bernier',
					hashed_pass: "bcrypt.hashSync('fq7QjoU9BI3VSCQ')",
					zip: '13933',
				},
				{
					email: 'Sherman.Watsica@yahoo.com',
					first_name: 'Jennings',
					last_name: 'Harris',
					hashed_pass: "bcrypt.hashSync('2H3DgC3D5jrRzkr')",
					zip: '93053',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Users');
	},
};
