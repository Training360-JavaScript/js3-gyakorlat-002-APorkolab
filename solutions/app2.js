const cookieHandler = {

	setCookie(name, string) {
		const now = new Date();
		now.setTime(now.getTime + 900000);
		const expires = now.toUTCString();
		document.cookie = `${name}=${string}; expires=${expires}`;
	},
	getAll() {
		const cookiesObj = {};
		const cookiesArr = document.cookie.split('; ');
		cookiesArr.forEach(cookie => {
			const pair = cookie.split('=');
			cookiesObj[pair[0]] = pair[1];
		})
		return cookiesObj;
	},
	toSessionStorage() {
		const backTo = cookieHandler.getAll();
		for (let k in backTo) {
			sessionStorage.setItem(k, backTo[k])
		}
	},
	flush() {
		localStorage.clear();
		document.cookie.split(";").forEach(function (c) {
			document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
		});
	}
}

cookieHandler.setCookie('viewed', '5');
cookieHandler.setCookie('uid', '354774631237');
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');


export {
	cookieHandler
};