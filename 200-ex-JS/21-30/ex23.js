//! Verificador cor semaáforo
var corSemaforo = function (cor) {
    if (cor === 'vermelho') {
        console.log("A cor ".concat(cor, ", significa parar."));
    }
    else if (cor === 'laranja') {
        console.log("A cor ".concat(cor, ", significa aten\u00E7\u00E3o."));
    }
    else if (cor === 'verde') {
        console.log("A cor ".concat(cor, ", significa siga em frente."));
    }
    else {
        console.log("A cor ".concat(cor, ", n\u00E3o pertence a sem\u00E1foros."));
    }
};
corSemaforo('roxo');
