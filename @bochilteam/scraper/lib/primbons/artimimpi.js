"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function artimimpi(mimpi) {
    var _a, _b, _c, _d, _e;
    const { data } = await axios_1.default.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`);
    const results = (_e = (_d = (_c = (_b = (_a = data.split('</i></b><br><br>')[1]) === null || _a === void 0 ? void 0 : _a.split('<!-- AWAL IN-ARTICLE ADV -->')[0]) === null || _b === void 0 ? void 0 : _b.replace(/<(\/)?font( color=#ff0000)?>/gi, '')) === null || _c === void 0 ? void 0 : _c.trim()) === null || _d === void 0 ? void 0 : _d.split('<br><br>')) === null || _e === void 0 ? void 0 : _e.filter((v) => v);
    return results || [];
}
exports.default = artimimpi;
