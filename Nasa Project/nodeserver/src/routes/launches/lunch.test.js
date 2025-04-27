const request = require('supertest');
const app = require('../../app');

describe('Test GET/launches', () => {
    test("It should response with 200 sucess", async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('Test POST/launch', () => {

    const completeLaunchData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        launchDate: 'January 14, 2030',
        target: 'Kepler-186f'
    }

    const launchDataWithoutDate = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186f'
    }

    const launchDataWithInvalidDate = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        launchDate: 'zoot',
        target: 'Kepler-186f'
    }

    test('It should respond with 201 created', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201)

        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate)

        expect(response.body).toMatchObject(launchDataWithoutDate)
    })

    test('It should catch missing required properties', async () => { 
        const response = await request(app)
            .post('/launches')
            .send(launchDataWithoutDate)
            .expect('Content-Type', /json/)
            .expect(400)

        expect(response.body).toStrictEqual({
            ok: false,
            error: 'Missing required launch property'
        })
    })
    test('It should catch invalid dates', async () => { 
        const response = await request(app)
            .post('/launches')
            .send(launchDataWithInvalidDate)
            .expect('Content-Type', /json/)
            .expect(400)

        expect(response.body).toStrictEqual({
            error: 'Invalid launch date, date formate is January 14, 2030'
        })
    })
})