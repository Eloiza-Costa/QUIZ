const verificar= function(opcao){
    switch(opcao){
        case '1': 
            document.getElementById("alternativa").innerHTML = "Resposta Correta!"
            document.getElementById("imagem1").src = "http://25.media.tumblr.com/tumblr_m3ow475YiX1qlzi22o1_500.gif"
            break
        case '2':
            document.getElementById("alternativa").innerHTML = "Resposta Incorreta, a personagem que possui esta característica é Sakura Haruno"
            document.getElementById("imagem1").src = "http://4.bp.blogspot.com/-6VvQ_8ni80I/Uciz4C3NWRI/AAAAAAAAAZA/wMPpfHgNe4Y/s1600/fanfiction-animes-naruto-my-guardian-angel-538212,220120132040.gif"
            break
        }
}
const verificar2= function(opcao){
    switch(opcao){
        case '1': 
            document.getElementById("alternativa2").innerHTML = "Resposta Correta!"
            document.getElementById("imagem2").src = "https://i0.wp.com/i.pinimg.com/originals/02/61/c3/0261c36100fbd0464dd1accf03720db6.gif"
            break
        case '2':
            document.getElementById("alternativa2").innerHTML = "Resposta Incorreta, os integrantes do time 7 são: Kakashi, Naruto, Sasuke e Sakura "
            document.getElementById("imagem2").src = "https://c.tenor.com/YFxeJrPivFoAAAAC/kakashi-naruto.gif"
            break
        }
}
const verificar3= function(opcao){
    switch(opcao){
        case '1': 
            document.getElementById("alternativa3").innerHTML = "Resposta Correta!"
            document.getElementById("imagem3").src = "https://pa1.narvii.com/6573/86662090cb635bd93688ebdda7a2fea3deda3fc0_hq.gif"
            break
        case '2':
            document.getElementById("alternativa3").innerHTML = "Resposta Incorreta, o personagem esmagado por uma pedra é Obito Uchiha "
            document.getElementById("imagem3").src = "https://pa1.narvii.com/6496/ef5e46e9f54ed39fd849d7e0ead9aa9489e95ac4_hq.gif"
            break
    }
}
const verificar4= function(opcao){
    switch(opcao){
        case '1': 
            document.getElementById("alternativa4").innerHTML = "Resposta Correta!"
            document.getElementById("imagem4").src = "https://i.pinimg.com/originals/c1/60/09/c16009efd53f10bba79f19c683d53c3e.gif"
            break
        case '2':
            document.getElementById("alternativa4").innerHTML = "Resposta Incorreta, o personagem que possui uma raposa é Naruto Uzumaki"
            document.getElementById("imagem4").src = "https://c.tenor.com/WOdwAFh_bfIAAAAC/naruto-crying.gif"
            break
    }
}
const verificar5= function(opcao){
    switch(opcao){
        case '1': 
            document.getElementById("alternativa5").innerHTML = "Resposta Correta!"
            document.getElementById("imagem5").src = "https://img.wattpad.com/a2a51ac7c35b0a04f688b05c0cc669cd5ad364bb/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6f32536e42474b79577831446e773d3d2d352e313565353135396463343165386463313830373633303338313333322e676966"
            break
        case '2':
            document.getElementById("alternativa5").innerHTML = "Resposta Incorreta, o clã que possui esta característica é o Clã Uzumaki"
            document.getElementById("imagem5").src = "https://pa1.narvii.com/6821/0fa9e300b5b6c47facda2cfd8ffbe1c4d4d2512a_hq.gif"
            break
    }
}