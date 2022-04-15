function botaoEnviar()
{
	var nome = document.getElementById('nomeid').value;
	var fone = document.getElementById('foneid').value;
	var email = document.getElementById('emailid').value;

	/*---TÁ UMA BAGUNÇA PORQUE FIZ CORRENDO KKKKKKKKK :(---*/

	if((document.getElementById('nomeid').value != "") && (document.getElementById('foneid').value != "") && (document.getElementById('emailid').value != "")){
		document.getElementById('impNome').innerHTML = 'Nome: ' + nome + "<br>" + 'Fone: ' + fone + "<br>" + 'Email: ' + email;
	}else{
		alert('Preencha todos os campos!!!');
	}
}