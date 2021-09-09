function AV(what) {
	var aarav = document.querySelector(what);
	aarav.html = function (inside) {
		aarav.innerHTML = inside;
	};
	aarav.txt = function (inside) {
		aarav.textContent = inside;
	};
	aarav.hide = function () {
		aarav.style.opacity = "0";
	};
	aarav.show = function () {
		aarav.style.opacity = "1";
	};
	aarav.event = function (event, call) {
		aarav.addEventListener(event, call);
	};
	aarav.attr = function (name, val) {
		aarav.setAttribute(name, val);
	};
	aarav.inside = function (child) {
		parent.appendChild(child);
	};
	aarav.rid = function () {
		aarav.remove();
	};
	aarav.css = aarav.style;
	return aarav;
}
function forTimeLoopAV(much, milsec, fun) {
	for (var count = 0; count < much; count++) {
		setInterval(fun, milsec);
	}
}
