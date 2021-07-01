function calculate(){
    result = 0;
    result = document.getElementById('display').value;
    document.getElementById('display').value = eval(result);
}

function clean(){
    document.getElementById('display').value ='';
}

function join(valor){
    document.getElementById('display').value += valor;
}

