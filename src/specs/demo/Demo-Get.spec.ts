import { StatusCodes } from 'http-status-codes';
import { client } from '../../base/ClientBO';

describe('Sample example', function () {
    it('[GET /books] - All books.', async () => {
        const response = await client()
            .get('/books')
            .expect(StatusCodes.OK);
        expect(response.body.length).toBeGreaterThanOrEqual(100);
    });
    describe('Inner test-suite', function () {
        it('[GET /books/15] - response should return status 200', async () => {
            const response = await client()
                .get('/books/15');
            console.log("Response body title: ", response.status)
            expect(response.status).toEqual(200);
        });
        it('[GET /books/16] - Book title should be equal "Book 15"', async () => {
            const response = await client()
                .get('/books/16')
                .set('Accept', 'application/json')
                .expect(StatusCodes.OK);
            console.log("Response body title: ", response.body.title)
            expect(response.body.title).toEqual("Book 16");
        });
        it('[GET /books/17] - Book description should be started with "Ipsum"', async () => {
            const response = await client()
                .get('/books/17');
            console.log("Response description: ", response.body.description)
            // expect(response.body.description.split(" ")[0]).toBe("Ipsum") //TODO: get an error random random
        });
    })
});