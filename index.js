export default {
	fetch(request) {
		console.log(request.url);
		return new Response('Hello worker!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
