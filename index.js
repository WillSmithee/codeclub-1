export default {
	fetch(request) {
		if(request.url == "https://my-project.willsmithee.workers.dev") {
			return new Response('Hello worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
		else{
			return new Response('Error Worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
	},
};
