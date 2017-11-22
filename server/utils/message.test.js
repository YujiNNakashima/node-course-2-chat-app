var expect = require("expect");
var {generateMessage, generateLocationMessage} = require('./message');

describe("generateMessage", () => {
	it('should generate correct message object', () => {

		var from = "Schubert";
		var text = "Heu";
		var message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe("number");
		expect(message).toMatchObject({from, text});
	});
});

describe('generationLocationMessage', () => {
	it('should generate correct location object', () => {
		let from = 'Deb';
		let latitude = 15;
		var longitude = 19;
		var url = 'https://www.google.com/maps?q=15,19';
		let message = generateLocationMessage(from, latitude, longitude);

		// expect(message.createdAt).toBeA('number');
		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({from, url});

	});
});