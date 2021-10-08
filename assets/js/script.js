$(function(){
    const tolken = "IGQVJYRjV0TENWbEM2ZAnRTbWpsWG9PMHROTlloTjBSQWVKamZAyM0V1SnZA5dWpGblBpdldHOERXY1FBcWlVUmJGOXpyczh3Sm9OWVp5SzlOdmxUZA09Pc0IwQ0tabzB0eGVyelRfSmJsUXJ5M0ZAxd0JDSQZDZD";
    const url = "https://graph.instagram.com/me/media?access_token="+tolken+"&fields=media_url,media_type,caption_permalink";
    console.log(url)
    $.get(url).then(function(response){
       // console.log('response: ', response.data)
       let dadoJson = response.data;
        let conteudo = "<div class='row'>";
        
        for(let p=0; p < dadoJson.length; p++){
            if(p < 7){
                let feed = dadoJson[p];
                let titulo = feed.caption !== null ?feed.caption: "";
                let type = feed.media_type;
                if(type === 'VIDEO'){
                     conteudo += "<div class='col-md-4 m-1'><video class='video-insta'><source src='"+feed.media_url+"' type='video/mp4'></video></div>";
                }
                else  if(type === "IMAGE"){
                     conteudo += "<div class='col-md-4 m-1'> <img src='"+feed.media_url+"' class='img-insta' title='"+titulo+"' onclick(window.open('\'"+feed.permalink+"'\')) ></div>";
    
                }
            }
        }
        conteudo += "</div>";

        $('#feed-insta').html(conteudo)
    })
})