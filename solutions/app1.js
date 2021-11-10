const setCookie = (string) => {
	const now = new Date();
	now.setTime(now.getTime + 900000);
	const expires = now.toUTCString();
	document.cookie = `token=${string}; expires=${expires}`;
}

export default setCookie;