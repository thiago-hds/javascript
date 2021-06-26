function test() {

    if (true) {
        //tanto let como const são block scoped
        let a = 1;
        const b = 2;

        //var eh function scoped
        var c = 3;
    }

    //c existe na função mais externa em que esta aninhado.
    //sua declaração é puxada para o topo da função mais externa (hoisting)

    //console.log(a); //ReferenceError
    //console.log(b); //ReferenceError
    console.log(c); //OK
}

test();
//console.log(c);//ReferenceError