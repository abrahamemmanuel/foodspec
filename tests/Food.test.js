const request = require('supertest');
const fs = require('fs');
const app = require('../server');
const { expect } = require('chai');
const Food = require('../app/Models/Food');

const path = 'C:\/Users\/Staff\/Desktop\/FoodSpec';//replace this with the path on your machine
const foods = JSON.parse(fs.readFileSync(`${path}/database/seeders/foods.json`, 'utf-8'));

beforeEach(async () => {
	await Food.deleteMany();
	await Food.insertMany(foods);
});

describe('GET /api/v1/foodspecs', () => {
	it('should get foods by specs', async () => {
		await request(app)
		.get('/api/v1/foodspecs?specifications=low-carb,vegan,lactose-free')
		.then(res => {
			expect(res.statusCode).to.equal(200);
			expect(res.body.count).to.equal(19);
		});
	});
});

describe('GET /api/v1/foodspecs', () => {
	it('should get foods by specs', async () => {
		await request(app)
		.get('/api/v1/foodspecs?specifications=low-carb')
		.then(res => {
			expect(res.statusCode).to.equal(200);
			expect(res.body.count).to.equal(11);
		});
	});
});

describe('GET /api/v1/foodspecs', () => {
	it('should get foods by specs', async () => {
		await request(app)
		.get('/api/v1/foodspecs?specifications=low-carb,vegan&order=asc')
		.then(res => {
			expect(res.statusCode).to.equal(200);
			expect(res.body.count).to.equal(15);
		});
	});
});