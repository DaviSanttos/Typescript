/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo_list_ts/menu.ts":
/*!**********************************!*\
  !*** ./src/todo_list_ts/menu.ts ***!
  \**********************************/
/***/ (() => {


const icon = document.getElementById("menu-hamburger");
const iconClose = document.getElementById("close");
let menu = document.getElementById("mobile-menu");
icon.addEventListener("click", () => {
    menu.classList.remove("anim-r");
    menu.classList.add("anim");
    menu.classList.remove("hidden");
});
iconClose.addEventListener("click", () => {
    menu.classList.remove("anim");
    menu.classList.add("anim-r");
    setTimeout(() => {
        menu.classList.add("hidden");
    }, 300);
});


/***/ }),

/***/ "./src/todo_list_ts/todo_list.ts":
/*!***************************************!*\
  !*** ./src/todo_list_ts/todo_list.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


//receber os dados do formulario e para o envio por padrao
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./menu */ "./src/todo_list_ts/menu.ts");
const Form = document.querySelector('form');
const Table = document.querySelector('#table');
// Adicione um ouvinte de evento para o carregamento da página
window.addEventListener('load', function () {
    // Verifique se a URL é a página desejada
    if (window.location.href.includes('http://127.0.0.1:5500/frontend/todo_list.html')) {
        list();
    }
    if (window.location.href.includes('http://127.0.0.1:5500/frontend/tarefas_pendendes.html')) {
        listPending();
        completeQuest();
    }
    if (window.location.href.includes('http://127.0.0.1:5500/frontend/concluidas.html')) {
        console.log('concluidas');
        listComplete();
    }
});
//validar os campos para o formato desejado e salvar em algum local de armazenamento
function validator(priorit, text) {
    const dados = {
        text,
        priorit,
    };
    const newDados = JSON.stringify(dados);
    saveInStorage(newDados);
}
function saveInStorage(dados) {
    const listaExistenteString = localStorage.getItem('tarefas');
    const listaExistente = listaExistenteString ? JSON.parse(listaExistenteString) : [];
    listaExistente.push(dados);
    localStorage.setItem('tarefas', JSON.stringify(listaExistente));
}
//resgatar esses dados e exibi-los em forma de tabela
function getItems(storage = 'tarefas') {
    const items = localStorage.getItem(`${storage}`);
    const newList = items ? JSON.parse(items) : [];
    // Converter cada string JSON em objeto JavaScript
    const parsedItems = newList.map(item => JSON.parse(item));
    return parsedItems;
}
function list() {
    const btnSubmit = document.querySelector('#sub');
    console.log('Usuário entrou na página específica!');
    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        const allRadios = Form.querySelectorAll('.prioridade');
        const inputData = Form.querySelector('#txt');
        const tr = document.createElement('tr');
        const tdQuest = document.createElement('td');
        const tdPriorit = document.createElement('td');
        tdPriorit.classList.add(...['border', 'border-slate-300']);
        tdQuest.classList.add(...["border", "border-slate-300"]);
        tdQuest.append(inputData.value);
        allRadios.forEach((e) => {
            if (e.checked) {
                if (e.value === 'baixa')
                    tdPriorit.classList.add('text-green-600');
                if (e.value === 'media') {
                    tdPriorit.append('Média');
                    tdPriorit.classList.add('text-yellow-500');
                }
                if (e.value === 'urgente')
                    tdPriorit.classList.add('text-red-700');
                validator(e.value, inputData.value);
                if (e.value !== 'media')
                    tdPriorit.append(capitalize(e.value));
            }
        });
        tr.appendChild(tdQuest);
        tr.appendChild(tdPriorit);
        Table === null || Table === void 0 ? void 0 : Table.appendChild(tr);
    });
}
function listPending() {
    console.log('Usuário entrou na página!');
    const list = getItems();
    list.forEach((e, index) => {
        const tr = document.createElement('tr');
        tr.id = index.toString();
        const tdQuest = document.createElement('td');
        const tdPriorit = document.createElement('td');
        const tdCheck = document.createElement('td');
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        tdPriorit.classList.add(...['border', 'border-slate-300']);
        tdQuest.classList.add(...["border", "border-slate-300"]);
        tdCheck.classList.add(...["border", "border-slate-300"]);
        tdQuest.append(e.text);
        tdCheck.appendChild(checkboxInput);
        if (e.priorit === 'baixa')
            tdPriorit.classList.add('text-green-600');
        if (e.priorit === 'media') {
            tdPriorit.append('Média');
            tdPriorit.classList.add('text-yellow-500');
        }
        if (e.priorit === 'urgente')
            tdPriorit.classList.add('text-red-700');
        if (e.priorit !== 'media')
            tdPriorit.append(capitalize(e.priorit));
        tr.appendChild(tdQuest);
        tr.appendChild(tdPriorit);
        tr.appendChild(tdCheck);
        Table === null || Table === void 0 ? void 0 : Table.appendChild(tr);
    });
}
function completeQuest() {
    const date = new Date().getDate();
    Table === null || Table === void 0 ? void 0 : Table.addEventListener('click', function () {
        const check = document.querySelectorAll('input');
        check.forEach(e => {
            var _a, _b;
            if (e.checked) {
                const item = (_b = (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id;
                console.log(item);
                let oldList = localStorage.getItem('tarefas');
                let newList = oldList ? JSON.parse(oldList) : [];
                let newArray = [...newList];
                let delet = newArray.splice(Number(item), 1);
                const objetoJS = JSON.parse(delet[0]);
                objetoJS.date = date;
                newStorageComplete(objetoJS);
                let dadosJSon = JSON.stringify(newArray);
                localStorage.setItem('tarefas', dadosJSon);
                window.location.href = 'http://127.0.0.1:5500/frontend/tarefas_pendendes.html';
            }
        });
    });
}
function listComplete() {
    const newDate = new Date().getDate();
    //const allItems= getItems('oldtarefas');
    let oldList = localStorage.getItem('oldtarefas');
    let newList = oldList ? JSON.parse(oldList) : [];
    newList.forEach((e, index) => {
        if (e.date !== newDate) {
            deleteObsolet(index);
        }
        else {
            const tr = document.createElement('tr');
            const tdQuest = document.createElement('td');
            const tdPriorit = document.createElement('td');
            tdPriorit.classList.add(...['border', 'border-slate-300']);
            tdQuest.classList.add(...["border", "border-slate-300"]);
            tdQuest.append(e.text);
            if (e.priorit === 'baixa')
                tdPriorit.classList.add('text-green-600');
            if (e.priorit === 'media') {
                tdPriorit.append('Média');
                tdPriorit.classList.add('text-yellow-500');
            }
            if (e.priorit === 'urgente')
                tdPriorit.classList.add('text-red-700');
            if (e.priorit !== 'media')
                tdPriorit.append(capitalize(e.priorit));
            tr.appendChild(tdQuest);
            tr.appendChild(tdPriorit);
            Table === null || Table === void 0 ? void 0 : Table.appendChild(tr);
        }
    });
}
function newStorageComplete(arg) {
    let oldList = localStorage.getItem('oldtarefas');
    let newList = oldList ? JSON.parse(oldList) : [];
    let newArray = [...newList];
    newArray.push(arg);
    let dadosJSon = JSON.stringify(newArray);
    localStorage.setItem('oldtarefas', dadosJSon);
}
function deleteObsolet(index) {
    let oldList = localStorage.getItem('oldtarefas');
    let newList = oldList ? JSON.parse(oldList) : [];
    let newArray = [...newList];
    newArray.splice(Number(index), 1);
    let dadosJSon = JSON.stringify(newArray);
    localStorage.setItem('oldtarefas', dadosJSon);
}
function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************!*\
  !*** ./src/A0007-webpack/index.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
//import './form-control';
__webpack_require__(/*! ../todo_list_ts/todo_list */ "./src/todo_list_ts/todo_list.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map