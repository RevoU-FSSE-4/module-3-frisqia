var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var coreFunction = (function (targetUl, targetInput, api) {
    function addTask() {
        var text = document.getElementById(targetInput).value;
        addLi(text);
    }
    function addLi(text) {
        var _this = this;
        var _a, _b;
        if (text === "") {
            var li = document.createElement("li");
            li.innerHTML = "    <div>\n      <span>Task cannot be empty!</span>\n      </div>\n      <button class=\"badge border-0 bg-danger remove-btn\">x</button>\n  ";
            (_a = document.getElementById(targetUl)) === null || _a === void 0 ? void 0 : _a.appendChild(li);
            var removeButtons = document.querySelectorAll(".remove-btn");
            console.log(removeButtons);
            for (var del = 0; del < removeButtons.length; del++) {
                var hapus = removeButtons[del];
                hapus.addEventListener("click", function () {
                    var _a;
                    (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                    //console.log(removeButtons);
                });
            }
        }
        else {
            var li = document.createElement("li");
            li.innerHTML = "    <div>\n                          <input class=\"form-check\" type=\"checkbox\">\n                          <span>".concat(text, "</span>\n                          </div>\n                          <button class=\"badge border-0 bg-danger remove-btn\">x</button>\n                      ");
            (_b = document.getElementById(targetUl)) === null || _b === void 0 ? void 0 : _b.appendChild(li);
            var checkTask = void 0;
            checkTask = document.querySelectorAll(".form-check");
            var _loop_1 = function (ceck) {
                var input = checkTask[ceck];
                var taskSpan = input.nextElementSibling;
                input.addEventListener("change", function () { return __awaiter(_this, void 0, void 0, function () {
                    var textDecoration;
                    return __generator(this, function (_a) {
                        textDecoration = taskSpan.style.textDecoration;
                        taskSpan.style.textDecoration = textDecoration ? "" : "line-through";
                        return [2 /*return*/];
                    });
                }); });
            };
            for (var ceck = 0; ceck < checkTask.length; ceck++) {
                _loop_1(ceck);
            }
            var removeButtons = document.querySelectorAll(".remove-btn");
            for (var del = 0; del < removeButtons.length; del++) {
                var removeButton = removeButtons[del];
                removeButton.addEventListener("click", function () {
                    var _a;
                    (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                    //console.log(removeButtons);
                });
            }
        }
    }
    function fetchRandomTask(api, addLi) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, index, text, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(api)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        for (index = 0; index < data.length; index++) {
                            text = data[index];
                            addLi(text);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("ERROR");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return {
        targetUl: targetUl,
        targetInput: targetInput,
        api: api,
        addTask: addTask,
        fetchRandomTask: function () { return fetchRandomTask(api, addLi); },
    };
})("taskList", "newTask", "https://module3-api-is2m.onrender.com/random-todos");
(_a = document.getElementById("addTaskBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    coreFunction.addTask();
});
document.addEventListener("DOMContentLoaded", function () {
    coreFunction.fetchRandomTask();
});
