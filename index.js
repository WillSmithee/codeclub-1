export default {
	fetch() {
		return new Response('Hello worker! Again', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
