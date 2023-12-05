if (localStorage.getItem('code')) {

} else {
    var c = `<!DOCTYPE html>\n<html>\n<head>\n<style>\n\n</style>\n</head>\n<body>\n\n<h1>Welcome To Live HTML Editor</h1>\n\n<script>\n\n</script>\n</body>\n</html>`;
    localStorage.setItem('code', c);
}

var content = document.getElementById('mycode').value = localStorage.getItem('code');

//var content = document.getElementById('mycode').value=`<html>\n<head>\n\n</head>\n<body>\n\n<h1>Welcome To Live HTML Editor</h1>\n\n</body>\n</html>`;
function update() {
    var content = document.getElementById('mycode').value;
    var iframe = document.getElementById('display');
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.write(content+`\n<style>::-webkit-scrollbar {width: 8px;}::-webkit-scrollbar-track {background-color: #e0e0e0;}   ::-webkit-scrollbar-thumb {background: darkgrey;}::-webkit-scrollbar-thumb:hover {background: grey;}</style>`);
    iframe.document.close();
    return false;
}

function preview() {
    var check = document.getElementById("livep");
    var run = document.getElementById("run");
    var a = document.form1.livep.checked;
    run.style.visibility = (a) ? "hidden" : "visible";
}

update();
preview();

var input = document.getElementById("mycode");
input.oninput = function () {
    localStorage.setItem('code', document.getElementById('mycode').value);
    var a = document.form1.livep.checked;
    (a) ? update() : preview();
}
run.onclick = function () {
    update();
}

function show() {
    let v = document.getElementById("moda");
    v.style.display = "block";
    document.getElementById("modalback").style.display = "block";
}
function hide() {
    let v = document.getElementById("moda");
    v.style.display = "none";
    document.getElementById("modalback").style.display = "none";
    localStorage.setItem('mod', 'true');
}
if (localStorage.getItem('mod')) {
    hide();
} else {
    show();
}


document.form1.fs.oninput = function () {
    document.getElementById('mycode').style.fontSize = document.form1.fs.value + "px";
    document.getElementById("fsl").innerHTML = document.form1.fs.value;
}
document.getElementById("modalback").onclick = function () {
    hide();
}


function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.dispay = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById("dwn").onclick = function () {
    download("index.html", document.getElementById('mycode').value);
}

// document.getElementById("fcode").onclick = function () {
    var show_code=function () {
    if (screen.width <= 600) {
        document.getElementById("i1").style.height = "100%";
        document.getElementById("i2").style.height = "0%";
        document.getElementById("i1").style.display = "block";
        document.getElementById("i2").style.display = "none";
    } else {
        document.getElementById("i1").style.width = "100%";
        document.getElementById("i2").style.width = "0%";
        document.getElementById("i1").style.display = "block";
        document.getElementById("i2").style.display = "none";
    }
}

//document.getElementById("fresult").onclick = function () {
    var show_result= function () {
    if (screen.width <= 600) {
        document.getElementById("i1").style.height = "0%";
        document.getElementById("i2").style.height = "100%";
        document.getElementById("i1").style.display = "none";
        document.getElementById("i2").style.display = "block";
    } else {
        document.getElementById("i1").style.width = "0%";
        document.getElementById("i2").style.width = "100%";
        document.getElementById("i1").style.display = "none";
        document.getElementById("i2").style.display = "block";
    }
}

//document.getElementById("fboth").onclick = function () {
    var show_code_result= function () {
    if (screen.width <= 600) {
        document.getElementById("i1").style.height = "50%";
        document.getElementById("i2").style.height = "50%";
        document.getElementById("i1").style.display = "block";
        document.getElementById("i2").style.display = "block";
    } else {
        document.getElementById("i1").style.width = "50%";
        document.getElementById("i2").style.width = "50%";
        document.getElementById("i1").style.display = "block";
        document.getElementById("i2").style.display = "block";
    }
}


document.getElementById("menu").onclick = function () {
    if (screen.width <= 600) {
        document.getElementById("nav").style.height = "260px";
        document.getElementById("nav-back").style.height = "100%";
    } else {
        document.getElementById("nav").style.height = "200px";
        document.getElementById("nav-back").style.height = "100%";
    }
}
document.getElementById("nav-back").onclick = function () {
    document.getElementById("nav").style.height = "0px";
    document.getElementById("nav-back").style.height = "0%";
}
