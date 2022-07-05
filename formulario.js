let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let textArea = document.querySelector(".formcontato__textarea");
let spanN = document.querySelector(".input-mensagem-erro-nome");
let spanE = document.querySelector(".input-mensagem-erro-email");
let spanA = document.querySelector(".input-mensagem-erro-assunto");
let spanT = document.querySelector(".input-mensagem-erro-text");
const botao = document.querySelector(".formcontato__botao")
const validaEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
let verifica = false

	botao.style.display = "none";

function valida(input, span, quantidade, classe , maximo,texto){
	if(input.value == 0|| quantidade > maximo){
		span.classList.remove(classe);
		span.classList.add("input-container--invalido");
		span.innerHTML=texto
		return
	}else{
		span.classList.add(classe);
		span.classList.remove("input-container--invalido");	
		return verifica = true		
	}
}

function validaEmails (input, span, classe){
	if(input.value == 0){
		span.classList.remove(classe);
		span.classList.add("input-container--invalido");
		span.innerHTML="O email não deve ficar em branco."
		return
	}else{
		span.classList.add(classe);
		span.classList.remove("input-container--invalido");			
		 return verifica = true
	}
	if(!validaEmail.test(input.value)){
		span.classList.remove(classe);
		span.classList.add("input-container--invalido");
		span.innerHTML="O email não é valido."
		return
	}else{
		span.classList.add(classe);
		span.classList.remove("input-container--invalido");
		return verifica = true
	}
}
nome.addEventListener("blur",(evento) => {
	let input = nome.value;
	let quantidade = input.length
	valida(evento.target, spanN, quantidade, "input-mensagem-erro-nome",50,"O campo nome não pode estar vazio e deve conter até 50 caracteres");
});

email.addEventListener("blur",(evento) => {
	 validaEmails(evento.target,spanE,"input-mensagem-erro-email");
});

assunto.addEventListener("blur",(evento) => {
	let input = assunto.value;
	let quantidade = input.length
	valida(evento.target, spanA, quantidade, "input-mensagem-erro-assunto",50,"O campo assunto não pode estar vazio e deve conter até 50 caracteres");
});

textArea.addEventListener("blur",(evento) => {
	let input = textArea.value;
	let quantidade = input.length
	valida(evento.target, spanT, quantidade, "input-mensagem-erro-text",300,"O campo de mensagem não pode estar vazio e deve conter até 300 caracteres");
});

document.addEventListener('input', (evento) => {
if (
    nome.validity.valid &&
    email.validity.valid &&
    assunto.validity.valid &&
    textArea.validity.valid
) {
    botao.style.display = "block";
  } else {
     botao.style.display = "none";
  }
})