function questao7(){
    var dia = prompt('Dia da semana: ').toLowerCase().split('-')[0]
    switch(dia){
        case 'segunda':
            alert('Reuniao')
            break;
        case 'terca':
            alert('Palestra')
            break;
        case 'terça':
            alert('Palestra')
            break;
        case 'quarta':
            alert('Workshop')
            break;
        case 'quinta':
            alert('Trabalho Remoto')
            break;
        case 'sexta':
            alert('Agendamento Semanal')
            break;
        case 'sabado':
            alert('Shopping')
            break;
        case 'sábado':
            alert('Shopping')
            break;
        case 'domingo':
            alert('Praia')
            break;
        default:
            alert('Dia Invalido')
    }
}