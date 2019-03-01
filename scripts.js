// VARIABLES
const originSystemEl = document.querySelector('#originSystem');
const originGradeEl = document.querySelector('#originGrade');
const targetSystemEl = document.querySelector('#targetSystem');
const targetGradeEl = document.querySelector('#targetGrade');

const grades = {
    uiaa: [  "6-",    "6",      "6+",      "7-",       "7",      "7+",       "8-",     "8",        "8+",       "9-",       "9",       "9+",      "10-",      "10",     "10+",      "11-",      "1",      "11+",    "12-"],
    french: ["5b/c",  "5c/6a",  "6a/6a+",  "6a+/b",    "6b/b+",  "6b+/6c",   "6c+",    "7a",       "7a+/7b",   "7b/7b+",   "7c/7c+",  "7c+/8a",  "8a/8a+",   "8b",     "8b+/8c",   "8c/8c+",   "9a",     "9a+",    "9b"],
    yds: [   "5.8",   "5.9",    "5.10a",   "5.10b/c",  "5.10d",  "5.11a/b",  "5.11c",  "5.11c/d",  "5.12a/b",  "5.12b/c",  "5.12d",   "5.13a",   "5.13b/c",  "5.13d",  "5.14a/b",  "5.14b/c",  "5.14d",  "5.15a",  "5.15b"]
}


let originSystem;
let originGrade;
let targetSystem;
let currentIndex;

// EVENT LISTENERS
originSystemEl.addEventListener('change', _updateOriginSystem);
originGradeEl.addEventListener('change', _updateGrades);
targetSystemEl.addEventListener('change', _updateTargetSystem);

// FUNCTIONS

function _updateOriginSystem(e) {
    originSystem = _getSelectValue(e.target);
    _resetOriginOptions();
}

function _updateTargetSystem(e) {
    targetSystem = _getSelectValue(e.target);
    _updateGrades();
}

function _updateGrades() {
    originGrade = _getSelectValue(originGradeEl);
    currentIndex = grades[originSystem].indexOf(originGrade.toString());

    if (grades[originSystem].indexOf(originGrade.toString()) >= 0) {
        _outputResult(grades[targetSystem][currentIndex]);
    }
}

// HELPER FUNCTIONS
function _getSelectValue(sel) {
    return sel.value;
}

function _resetOriginOptions() {
    originGradeEl.innerHTML = '';
    let el = document.createElement("option");
    el.textContent = '-- choose --';
    el.selected = true;
    el.disabled = true;
    originGradeEl.appendChild(el);

    for(let i = 0; i < grades[originSystem].length; i++) {
        let el = document.createElement("option");
        el.textContent = grades[originSystem][i];
        el.value = grades[originSystem][i];
        originGradeEl.appendChild(el);
    }
}

function _outputResult(result) {
    targetGradeEl.innerHTML = result;
}


// init
function init() {
    originSystem = _getSelectValue(originSystemEl);
    targetSystem = _getSelectValue(targetSystemEl);
    _resetOriginOptions();
}

init();