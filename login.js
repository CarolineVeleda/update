
   

  // Initialize Firebase
 

  

 const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.database();



const linkLogin = document.getElementById('naologado');
const linkLogout = document.getElementById('logado');
const logado = document.getElementById('logado');
const naoLogado = document.getElementById('naologado');  
const avatar = document.getElementById('avatar');  
const nome= document.getElementById('nome');
 
  
linkLogout.addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        usuario = null;
        logado.style.display = 'none';
        naoLogado.style.display = 'block';
        avatar.src = '';
        nome.textContent = '';
    });
	console.log('banana');
});

linkLogin.addEventListener('click', function() {
	firebase.auth().signInWithRedirect(provider).then(function(user) {
        if (user) {
            usuario = user;
            logado.style.display = 'block';
            naoLogado.style.display = 'none';
            avatar.src = user.photoURL;
            nome.textContent = user.displayName;
        } else {
            usuario = null;
            logado.style.display = 'none';
            naoLogado.style.display = 'block';
            avatar.src = '';
            nome.textContent = '';
        }
    }).catch(function(erro) {
        alert("Falha ao realizar o login");
    });
   console.log('laranjal');
});

let usuario = null;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        usuario = user;
        logado.style.display = 'block';
        naoLogado.style.display = 'none'; 
        avatar.src = user.photoURL;
        nome.textContent = user.displayName;    
    } else {
        usuario = null;
        logado.style.display = 'none';
        naoLogado.style.display = 'block';
        avatar.src = '';
        nome.textContent = '';
    }
});


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



