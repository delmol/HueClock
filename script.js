function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
	changeBackground(h, m, s);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function changeBackground(h, m, s){
	// for smooth colour change
	// work out total minutes
	// and change hue based on minutes passed
	var totalMins = (h * 60) + m;
	var hue = totalMins * 0.25;
	
	// for saturation we'll just add twenty to keep it in the mid ranges
	var sat = m + 20;
	
	// and the same of the lightness
	var light = s + 15;
	
	document.body.style.backgroundColor= "hsl(" + hue + ", " + sat + "%, " + light + "%)";
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}