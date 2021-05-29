right_star();
left_star();
reverse_left();
reverse_right();
pyramid();

function right_star() {
    var n = 5;
    var str = '';

    for(var i = 1; i <= n; i++) {
        
        for(var j = 0; j <= n - i; j++ ) {
            str += ' ';
        }

        for(var k = 0; k < i; k++) {
            str += '*';
        }

        str += '\n';
    }
    console.log(str);
}

function left_star() {
    var n = 5;
    var str = '';

    for(var i = 0; i <= n; i++) {

        for(var j = 0; j < i; j++) {
            str += '*';
        }

        str += '\n';
    }

    console.log(str);
}

function reverse_left() {
    var n = 0;
    var str = '';

    for(var i = 5; i > n; i--) {

        for(var j = 0; j < i; j++) {
            str += '*';
        }

        str += '\n';
    }

    console.log(str);
}

function reverse_right() {
    var n = 5;
    var str = '';

    for(var i = 0; i < n; i++) {

        for(var j = 0; j <= i; j++) {
            str += ' ';
        }

        for(var k = 5; k > i; k--) {
            str += '*';
        }

        str += '\n';
    }

    console.log(str);
}

function pyramid() {
    var n = 5;
    var str = '';

    for(var i = 1; i <= n; i++) {

        for(var j = 1; j <= n - i; j++){
            str += ' ';
        }

        for(var k = 0; k < 2 * i - 1; k++) {
            str += '*';
        }

        str += '\n';
    }

    console.log(str);
}