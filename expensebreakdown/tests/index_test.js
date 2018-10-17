const request = require('supertest');
const app = require('../index');
const chai = require('chai');
const should = chai.should();

describe('index_test', () => {
    describe('POST /submitExp', async () => {
        it('should return percentages of expense categories', async () => {
            await request(app).post('/submitExp')
                .send({
                    exp1: 600,
                    cat1: "Rent",
                    exp2: 100,
                    cat2: "Utilities",
                    exp3: 60,
                    cat3: "Phone",
                    exp4: 80,
                    cat4: "Internet",
                    exp5: 70,
                    cat5: "Subscriptions"
                })
                .expect((res) => {
                    res.status.should.equal(200);
                    res.body['Subscriptions'].should.equal(8);
                });
        });
    });
});