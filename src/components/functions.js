
function toggleSideBar() {
    var x = document.getElementById("sidebar")
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}

function cutString(stringName, lengthMax) {
    if (stringName.length <= lengthMax) {
        return stringName
    } else {
        return stringName.substring(0,lengthMax)+'...'
    }
}

function isHeaderEmpty(val) {
    if (val.headerUrl == '') {
        return val.imageUrl
    } else {
        return val.headerUrl
    }
}

export {toggleSideBar, cutString, isHeaderEmpty}