var estruturageral = {
    mensagemfinal: {
        positiva:{
           texto: [
                "Great job! You nailed it!",
                "If you’d like, you can practice again by clicking the button below."
            ],
            
        },
        negativa:{
            texto: [
                "It was close!",
                "It’s always a good idea to review and try again. Sometimes success is just around the corner. Keep going",
                "To restart, simply click the button below.."
            ],
         
        }
        
    },
    introducao: { // Se introducao = false não abre a modal com a introducao. Se tiver conteúdo, abre com o conteúdo no padrão abaixo
        texto: [
            "Muito bem! Você arrasou!",
            "Se você quiser, você pode praticar novamente clicando no botão abaixo."
        ],
        imagem: {
            src: "",
            title: "",
            alt:"",
            fonte: ""
        },
    },
    config: {
        acertos_para_vitoria: 0, // 0 = >50% de acertos.
        globalType: "dragindrop" // caso as perguntas não possuam type, será definido um padrão. (globalType = "") = "quiz"
        // permitirApenas: 0; 0 = todas. Caso o usuário coloque um número como 10, por exemplo, o quiz vai exibir apenas 10 perguntas, mesmo que tenha 11 ou 1000 perguntas.
        // modo = 0; 0 ou "ordenado" significa uma pergunta após a outra. "inverso" ele começa pela última e "aleatorio" ele embaralha, tornando a ordem das perguntas aleatória.
    }
}


var lista_feedbacks_genericos = {

    positivo: ["Awesome! You got it right!", "Congratulations! You’re a city places expert!"],
    negativo: ["Almost there!", "Oops, not quite."]

}


var perguntas = [
    { 

        titulo: "01/08 - Hotel Staff",
        pergunta: {
            texto: "A person employed in a hotel to deal with reservations and to talk to guests."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: true,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: false,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
    { 

        titulo: "02/08 - Hotel Staff",
        pergunta: {
            texto: "A person who helps the guests to take their luggage to their rooms."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: true,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: false,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
    { 

        titulo: "03/08 - Hotel Staff",
        pergunta: {
            texto: "A person who manages the operations of a hotel. "        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: true,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: false,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
    { 

        titulo: "04/08 - Hotel Staff",
        pergunta: {
            texto: "A person who manages the operations of a hotel. "        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: true,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: false,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
    { 

        titulo: "05/08 - Hotel Staff",
        pergunta: {
            texto: "A person who makes drinks at the hotel bar. "        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: true,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: false,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
    { 

        titulo: "06/08 - Hotel Staff",
        pergunta: {
            texto: "A person who parks your car for you."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: true,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
    { 

        titulo: "07/08 - Hotel Staff",
        pergunta: {
            texto: "A person who cooks food at the hotel restaurant."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: false,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: true,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
    { 

        titulo: "08/08 - Hotel Staff",
        pergunta: {
            texto: "A person who handles luggage, mail, reservations and organizes excursions."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
                texto: "Receptionist",
                imagem: {
                    src: "custom/img/imagem-01.png",
                    title: "Receptionist",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 9: Hotel Receptionist. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/food-cart_5400637.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm&gt;</a> Accessed on: 12/11/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Bellboy",
                imagem: {
                    src: "custom/img/imagem-02.png",
                    title: "Bellboy",
                    alt:"Photograph of a hotel receptionist giving a card to a guest.",
                    fonte: "Figure 10: Bellboy. Source:  <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/adulto-caixas-baus-arcas-6474535/&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Housekeeper",
                imagem: {
                    src: "custom/img/imagem-03.png",
                    title: "Housekeeper",
                    alt:"Photograph of a housekeeper carrying towels.",
                    fonte: "Figure 11: Housekeeper. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-hotel-maid-holding-fresh-clean-folded-towels_7700714.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
                texto: "Hotel Manager",
                imagem: {
                    src: "custom/img/imagem-04.png",
                    title: "Hotel Manager",
                    alt:"Photograph of a woman holding a notebook and a pencil. ",
                    fonte: "Figure 12: Hotel manager. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/elegant-business-girl-with-notebook_3153895.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
                texto: "Bartender",
                imagem: {
                    src: "custom/img/imagem-05.png",
                    title: "Bartender",
                    alt:"Photograph of a man preparing a drink.",
                    fonte: "Figure 13: Bartender. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-man-preparing-drink_41253034.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: false,
                texto: "Valet",
                imagem: {
                    src: "custom/img/imagem-06.png",
                    title: "Valet",
                    alt:"Photograph of a man helping a woman park her car.",
                    fonte: "Figure 14: Valet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/parking-valet-helping-woman-park-her-car_34804604.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
                texto: "Chef",
                imagem: {
                    src: "custom/img/imagem-07.png",
                    title: "Chef",
                    alt:"Photograph of a woman preparing a steak.",
                    fonte: "Figure 15: Chef. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/female-chef-kitchen-preparing-plate-steak_32201706.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: true,
                texto: "Concierge",
                imagem: {
                    src: "custom/img/imagem-08.png",
                    title: "Concierge",
                    alt:"Photograph of a woman behind a reception counter.  ",
                    fonte: "Figure 16: Concierge. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/attractive-woman-reception-desk-looking-camera_3716703.htm&gt;</a> Accessed on: 12/21/2023.",
                },
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
        
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: lista_feedbacks_genericos["positivo"].sort(() => Math.random() - 0.5)[0], 
                },
            negativo: {
                    texto: lista_feedbacks_genericos["negativo"].sort(() => Math.random() - 0.5)[0]
                }
            
        }
    },
]


