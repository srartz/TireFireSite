$(document).ready(function() {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.money2').mask("#.##0,00", { reverse: true });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/,
                optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', { reverse: true });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true });
});





$("#value").mask("#.##0,00", { reverse: true });
$("#telefone").mask("(00) 0000-0000");
$("#cel").mask("(00) 0 0000-0000");
$("#cpf").mask("#00.000.000-00", { reverse: true });
$("#rg").mask("#0.000.000-0", { reverse: true });
$("#cep").mask("00.000-000");
$("#cnpj").mask("00.000.000/0000-00");

var salve = $("#salve");
salve.on("click", function() {

    //verificar se os inputs estão vazios
    var vazios = $("input").filter(function() {
        return !this.value;
    }).get();

    console.log(vazios);

    if (vazios.length) {
        $(vazios).addClass('vazio');
        console.log("Todos os campos devem ser preenchidos.");
        return false;
    } else {
        console.log("Mensagem enviada com sucesso! ");
    }

    var validos = $("input").filter(function() {
        return $(this).is(":valid"); // valida o campo. Retorna true ou false
    }).get();
});