function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 19
    });
    var infoWindow = new google.maps.InfoWindow({ map: map });
    // HTML5 Geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var usuario = new google.maps.Circle({
                strokeColor: '#8800FF',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#8800FF',
                fillOpacity: 0.35,
                map: map,
                center: position,
                radius: 5
            });
			



            infoWindow.setPosition(pos);
            infoWindow.setContent('Você está aqui.');
            map.setCenter(pos);
            
			
			biblioteca_rg = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.029856, lng:-52.097340}
            });
			

			
			museu_polvora = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.021777, lng:-52.104679}
            });
			
			museu_picada = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-31.987208, lng:-52.258058}
            });
			
			iemanja = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.187308, lng:-52.156042}
            });
			
			bento_gonçalves = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.033392, lng:-52.099082}
            });
			
			museu_antartico = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.026961, lng:-52.105912}
            });
			
			museu_artesacra = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.029702, lng:-52.094921}
            });
			
			museu_historico = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.033172, lng:-52.069606}
            });
			
			museu_naval = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.031396, lng:-52.083537}
            });
			
			museu_oceanografico = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.026953, lng:-52.105904}
            });
			
			museu_porto = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.029570, lng:-52.093910}
            });
			
			portico = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.053768, lng:-52.125809}
            });
			
			prefeitura = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.050321, lng:-52.124375}
            });
			
			
			
		

            igreja_fatima = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.035639, lng:-52.101934}
            });

            igreja_bonfim = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.038827, lng:-52.098124}
            });

            catedral_pedro = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.031513, lng:-52.097403}
            });

            paroquia_auxiliadora = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.041046, lng:-52.105649}
            });

            mosteiro_jose = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.035970, lng:-52.096028}
            });

            igreja_salvador = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.035374, lng:-52.098922}
            });

            hotel_moura = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.031411, lng:-52.090414}
            });

            centro_cultural = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.031984, lng:-52.089717}
            });

            receita_federal = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.030604, lng:-52.094996}
            });

            alfandega = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.030900, lng:-52.094609}
            });

            museu_cidade = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.029702, lng:-52.094922}
            });

            museu_francisco = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.031031, lng:-52.097414}
            });

            mercado_publico = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.029781, lng:-52.096339}
            });

            escola_jojo = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {lat:-32.034241, lng:-52.096870}
            });

			biblioteca_rg.setMap(map);
			museu_polvora.setMap(map);
			museu_picada.setMap(map);
			iemanja.setMap(map);
			bento_gonçalves.setMap(map);
			museu_antartico.setMap(map);
			museu_artesacra.setMap(map);
			museu_historico.setMap(map);
			museu_naval.setMap(map);
			museu_oceanografico.setMap(map);
			museu_porto.setMap(map);
			prefeitura.setMap(map);
			
            igreja_carmo.setMap(map);
            igreja_fatima.setMap(map);
            igreja_bonfim.setMap(map);
            catedral_pedro.setMap(map);
            paroquia_auxiliadora.setMap(map);
            mosteiro_jose.setMap(map);
            igreja_salvador.setMap(map);
            hotel_moura.setMap(map);
            centro_cultural.setMap(map);
            receita_federal.setMap(map);
            alfandega.setMap(map);
            museu_cidade.setMap(map);
            museu_francisco.setMap(map);
            mercado_publico.setMap(map);
            escola_jojo.setMap(map);

			
			
			User.addPin(biblioteca_rg);
			User.addPin(museu_polvora);
			User.addPin(museu_picada);
			User.addPin(iemanja);
			User.addPin(bento_gonçalves);
			User.addPin(museu_antartico);
			User.addPin(museu_artesacra);
			User.addPin(museu_historico);
			User.addPin(museu_naval);
			User.addPin(museu_oceanografico);
			User.addPin(museu_porto);
			User.addPin(prefeitura);
			
            User.addPin(igreja_carmo);
            User.addPin(igreja_fatima);
            User.addPin(igreja_bonfim);
            User.addPin(catedral_pedro);
            User.addPin(paroquia_auxiliadora);
            User.addPin(mosteiro_jose);
            User.addPin(igreja_salvador);
            User.addPin(hotel_moura);
            User.addPin(centro_cultural);
            User.addPin(receita_federal);
            User.addPin(alfandega);
            User.addPin(museu_cidade);
            User.addPin(museu_francisco);
            User.addPin(mercado_publico);
            User.addPin(escola_jojo);
			
			biblioteca_rg.addListener('click', function(){
                User.unlockPin(biblioteca_rg);
            });
			
			museu_polvora.addListener('click', function(){
                User.unlockPin(museu_polvora);
            });
			
			museu_picada.addListener('click', function(){
                User.unlockPin(museu_picada);
            });
			
			iemanja.addListener('click', function(){
                User.unlockPin(iemanja);
            });
			
			bento_gonçalves.addListener('click', function(){
                User.unlockPin(bento_gonçalves);
            });
			
			museu_antartico.addListener('click', function(){
                User.unlockPin(museu_antartico);
            });
			
			museu_artesacra.addListener('click', function(){
                User.unlockPin(museu_artesacra);
            });
			
			museu_historico.addListener('click', function(){
                User.unlockPin(museu_historico);
            });
			
			museu_naval.addListener('click', function(){
                User.unlockPin(museu_naval);
            });
			
			museu_oceanografico.addListener('click', function(){
                User.unlockPin(museu_oceanografico);
            });
			
			museu_porto.addListener('click', function(){
                User.unlockPin(museu_porto);
            });
			
			prefeitura.addListener('click', function(){
                User.unlockPin(prefeitura);
            });
			
			
			
            igreja_carmo.addListener('click', function(){
                User.unlockPin(igreja_carmo);
            });

            igreja_fatima.addListener('click', function(){
                User.unlockPin(igreja_fatima);
            });

            igreja_bonfim.addListener('click', function(){
                User.unlockPin(igreja_bonfim);
            });

            catedral_pedro.addListener('click', function(){
                User.unlockPin(catedral_pedro);
            });

            paroquia_auxiliadora.addListener('click', function(){
                User.unlockPin(paroquia_auxiliadora);
            });

            mosteiro_jose.addListener('click', function(){
                User.unlockPin(mosteiro_jose);
            });

            igreja_salvador.addListener('click', function(){
                User.unlockPin(igreja_salvador);
            });

            hotel_moura.addListener('click', function(){
                User.unlockPin(hotel_moura);
            });

            centro_cultural.addListener('click', function(){
                User.unlockPin(centro_cultural);
            });

            receita_federal.addListener('click', function(){
                User.unlockPin(receita_federal);
            });

            alfandega.addListener('click', function(){
                User.unlockPin(alfandega);
            });

            museu_cidade.addListener('click', function(){
                User.unlockPin(museu_cidade);
            });

            museu_francisco.addListener('click', function(){
                User.unlockPin(museu_francisco);
            });

            mercado_publico.addListener('click', function(){
                User.unlockPin(mercado_publico);
            });

            escola_jojo.addListener('click', function(){
                User.unlockPin(escola_jojo);
            });

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser não suporta Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Erro: O serviço de geolocalização falhou.' :
        'Erro: Seu browser não suporta geolocalização.');
}