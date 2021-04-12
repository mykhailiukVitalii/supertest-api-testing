import { StatusCodes } from 'http-status-codes';
import { client } from '../../base/ClientBO';

describe('Sample example', function () {
    it('/GET - All books', async () => {
        const response = await client()
            .get('/books')
            .expect(StatusCodes.OK);
        // console.log("Response length: ", response.body.length)
        expect(response.body.length).toBeGreaterThanOrEqual(100);
    });
});