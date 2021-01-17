import React from 'react';
import { API_URL } from '../const/api-url';
import { SHOULD_USE_MOCK } from '../const/should-use-mock';

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

type PostDataOptions = {
	mockSleepTime: number,
};

const defaulPostDataOptions: PostDataOptions = {
	mockSleepTime: 1500,
};

function usePostData (mock?: Object, options: PostDataOptions = defaulPostDataOptions) {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState<Error | null>(null);
	const [responseData, setResponseData] = React.useState<Object | null>(null);

	async function postWithMock () {
		if (mock === undefined) throw new Error('Cannot use postWithMock without a mock!');

		setLoading(true);
		await sleep(options.mockSleepTime);
		setResponseData(mock);
		setLoading(false);
		return true;
	}

	async function post (data: Object) {
		setLoading(true);
		try {
			const response = await fetch(API_URL, {
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
				method: 'POST',
			});
			if (!response) throw new Error('Internet error');

			const json = await response.json();
			setResponseData(json);
			return json;
		} catch (e) {
			setError(e);
			return null;
		} finally {
			setLoading(false);
		}
	}

	return [SHOULD_USE_MOCK && mock ? postWithMock : post, { loading, error, responseData }] as const;
}

export default usePostData;