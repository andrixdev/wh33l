window.onload = (event) => {
	let interv = setInterval(() => {
        let val = navigator.getGamepads()[0].axes[0]
        document.getElementsByTagName('body')[0].innerHTML = val
    }, 100)
}
