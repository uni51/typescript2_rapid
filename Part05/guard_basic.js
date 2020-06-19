"use strict";
function process(value) {
    if (typeof value === 'string') {
        // a. ここでは引数valueはstring型
        return value.toUpperCase();
    }
    else {
        // b. ここではnumber型
        return value.toFixed(1);
    }
}
