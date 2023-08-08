import { RefreshToken } from '../lib/urls';

export const _getData = async (
	Router,
	cookies,
	setCookie,
	url,
	page_no = 1,
	extra
) => {
	console.log('invoked _getUserAnswers');
	if (!Number(page_no)) page_no = 1;
	var accessToken = cookies.accessToken;
	if (
		new Date(cookies.refreshTokenExpiresAt) <= new Date() ||
		cookies.refreshToken == 'undefined' ||
		cookies.refreshToken == undefined
	) {
		Router.push('/login');
		return;
	}
	if (
		new Date(cookies.accessTokenExpiresAt) <= new Date() ||
		cookies.accessTokenExpiresAt == 'undefined' ||
		cookies.accessTokenExpiresAt == undefined
	) {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		var bodyInfo = JSON.stringify({
			refresh_token: cookies.refreshToken,
		});
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: bodyInfo,
			redirect: 'follow',
		};
		try {
			const fetch_response = await fetch(RefreshToken, requestOptions);
			if (fetch_response.ok) {
				const response = await fetch_response.text();
				const result = await JSON.parse(response);
				setCookie('accessToken', result.access_token, {
					path: '/',
					maxAge: 2592000,
					sameSite: true,
				});
				setCookie('accessTokenExpiresAt', result.access_token_expires_at, {
					path: '/',
					maxAge: 2592000,
					sameSite: true,
				});
				accessToken = result.access_token;
			}
		} catch (err) {
			console.log(err);
		}
	}
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${accessToken}`);
	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};
	try {
		const fetch_response = await fetch(`${url}?page=${page_no}`, requestOptions);
		// const fetch_response = await fetch(`${url}`, requestOptions);
		if (!fetch_response.ok) throw new Error('Server is Down!');
		const result = await fetch_response.json();
		console.log(result);
		return result;
	} catch (e) {
		console.log(e);
	}
};

export const _getDataWithoutAuth = async (url, page_no = 1) => {
	if (!Number(page_no)) page_no = 1;
	var myHeaders = new Headers();
	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};
	try {
		const fetch_response = await fetch(`${url}?page=${page_no}`, requestOptions);
		// const fetch_response = await fetch(url, requestOptions);
		if (!fetch_response.ok) throw new Error('Server is Down!');
		const result = await fetch_response.json();
		return result;
	} catch (e) {
		console.log(e);
	}
};

export const _postData = async (Router, cookies, setCookie, url, extra) => {
	var accessToken = cookies.accessToken;
	if (
		new Date(cookies.refreshTokenExpiresAt) <= new Date() ||
		cookies.refreshToken == 'undefined' ||
		cookies.refreshToken == undefined
	) {
		Router.push('/login');
		return;
	}
	if (
		new Date(cookies.accessTokenExpiresAt) <= new Date() ||
		cookies.accessTokenExpiresAt == 'undefined' ||
		cookies.accessTokenExpiresAt == undefined
	) {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		var bodyInfo = JSON.stringify({
			refresh_token: cookies.refreshToken,
		});
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: bodyInfo,
			redirect: 'follow',
		};
		try {
			const fetch_response = await fetch(RefreshToken, requestOptions);
			if (fetch_response.ok) {
				const response = await fetch_response.text();
				const result = await JSON.parse(response);
				setCookie('accessToken', result.access_token, {
					path: '/',
					maxAge: 2592000,
					sameSite: true,
				});
				setCookie('accessTokenExpiresAt', result.access_token_expires_at, {
					path: '/',
					maxAge: 2592000,
					sameSite: true,
				});
				accessToken = result.access_token;
			}
		} catch (err) {
			console.log(err);
		}
	}
	var myHeaders = new Headers();
	myHeaders.append('Authorization', `Bearer ${accessToken}`);
	extra != null && myHeaders.append('Content-Type', 'application/json');
	var raw;
	extra != null && (raw = JSON.stringify(extra));
	var requestOptions;
	extra == null
		? (requestOptions = {
				method: 'POST',
				headers: myHeaders,
				redirect: 'follow',
		  })
		: (requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow',
		  });
	try {
		const fetch_response = await fetch(url, requestOptions);
		console.log(fetch_response);
		if (!fetch_response.ok) throw new Error('Server is Down!');
		const result = await fetch_response.json();
		return result;
	} catch (e) {
		console.log(e);
	}
};

export const _ChangeDateToString = dateISO => {
	const date = new Date(dateISO);
	var currentdate = new Date();
	var Difference_In_Time = currentdate.getTime() - date.getTime();
	var Difference_In_Minutes = Math.floor(Difference_In_Time / (1000 * 60));
	var Difference_In_Hours = Math.floor(Difference_In_Time / (1000 * 3600));
	var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
	var Difference_In_Month = Math.floor(
		Difference_In_Time / (1000 * 3600 * 24 * 31)
	);
	var Difference_In_years = Math.floor(
		Difference_In_Time / (1000 * 3600 * 24 * 365)
	);
	var time = '';
	if (Difference_In_years > 0 && time === '') {
		return (time = `${Difference_In_years} ${
			Difference_In_years == 1 ? 'year' : 'years'
		} ago`);
	}
	if (Difference_In_Month > 0 && time === '') {
		return (time = `${Difference_In_Month} ${
			Difference_In_Month == 1 ? 'month' : 'months'
		} ago`);
	}
	if (Difference_In_Days > 0 && time === '') {
		return (time = `${Difference_In_Days} ${
			Difference_In_Days == 1 ? 'day' : 'days'
		} ago`);
	}
	if (Difference_In_Hours > 0 && time === '') {
		return (time = `${Difference_In_Hours} ${
			Difference_In_Hours == 1 ? 'hour' : 'hours'
		} ago`);
	}
	if (Difference_In_Minutes > 0 && time === '') {
		return (time = `${Difference_In_Minutes} ${
			Difference_In_Minutes == 1 ? 'min' : 'mins'
		} ago`);
	}
	time = `Just Now`;
	return time;
};
