var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
    }
    // console.log(doc);
    list.render(doc, type.value, 'end');
});
