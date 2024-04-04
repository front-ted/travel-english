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

        titulo: "1/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: true,
                texto: "Supermarket",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-01.png",
                        title: "Cart",
                        alt:"Photograph of a person pushing a shopping cart.",
                        fonte: "Figure 1: cart. Source:  <a class='link-fonte' href=' https://www.freepik.com/free-photo/food-cart_5400637.htm#query=supermarket&position=5&from_view=search&track=sph&uuid=cd74bea6-b7b5-4c22-91d9-6dbbef92ee5e' target='_blank'>&lt;https://www.freepik.com/free-photo/food-cart_5400637.htm#query=supermarket&position=5&from_view=search&track=sph&uuid=cd74bea6-b7b5-4c22-91d9-6dbbef92ee5e&gt;</a> Accessed on: 12/11/2023.",
                    },
                }
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                 ordem: "c",
                validacao: false,
                texto: "Police station",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "e",
                validacao: false,
                texto: "Restaurant",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Bus stop",
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Shopping mall",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Hospital",
            },
            {
                ordem: "m",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "2/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {

                ordem: "b",
                validacao: true,
                texto: "Museum",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-02.png",
                        title: "Cart",
                        alt:"Photograph of a couple looking at paintings on a wall.",
                        fonte: "Figure 2: Paintings. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/back-view-couple-holding-hands_34215928.htm#query=museum&position=36&from_view=search&track=sph&uuid=45128b43-be73-44c2-9d51-a79d4ac58fa3' target='_blank'>&lt;https://www.freepik.com/free-photo/back-view-couple-holding-hands_34215928.htm#query=museum&position=36&from_view=search&track=sph&uuid=45128b43-be73-44c2-9d51-a79d4ac58fa3&gt;</a> Accessed on: 12/11/2023.",
                    },
                }
            },
  
{
                 ordem: "c",
                validacao: false,
                texto: "Police station",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            
            
            {
                ordem: "e",
                validacao: false,
                texto: "Restaurant",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Bus stop",
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Shopping mall",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Hospital",
            },
            {
                ordem: "m",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "3/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
 {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {

                ordem: "c",
                validacao: true,
                texto: "Police station",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-03.png",
                        title: "Central Police Station",
                        alt:"Photograph of a two-story building with a sign that reads \"Central Police Station\".",
                        fonte: "Figure 3: Central Police Station building. Source: <a class='link-fonte' href='https://pixabay.com/photos/kingstown-st-vincent-the-grenadines-4652734/' target='_blank'>&lt;https://pixabay.com/photos/kingstown-st-vincent-the-grenadines-4652734/&gt;</a> Accessed on: 12/11/2023.",
                    },
                }
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            
            
            {
                ordem: "e",
                validacao: false,
                texto: "Restaurant",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Bus stop",
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Shopping mall",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "4/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
 {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },
            {

                ordem: "d",
                validacao: true,
                texto: "Drugstore",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-04.png",
                        title: "Buying medicine",
                        alt:"Photograph of a man and a woman revising medicine.",
                        fonte: "Figure 4: Medicine. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/revision-two-pharmacists-making-medicines-revision-drugstore_21701048.htm#query=drugstore&position=26&from_view=search&track=sph&uuid=fa906f43-ba37-4692-ae0c-5c5517b8464e' target='_blank'>&lt;https://www.freepik.com/free-photo/revision-two-pharmacists-making-medicines-revision-drugstore_21701048.htm#query=drugstore&position=26&from_view=search&track=sph&uuid=fa906f43-ba37-4692-ae0c-5c5517b8464e&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            
            
            {
                ordem: "e",
                validacao: false,
                texto: "Restaurant",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Bus stop",
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Shopping mall",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "5/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
 {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },
            
            
            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {

                ordem: "e",
                validacao: true,
                texto: "Theater",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-05.png",
                        title: "2 actors",
                        alt:"Photograph of two actors behind red curtains.",
                        fonte: "Figure 5: Actors. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/smiling-female-mime-artist-looking-male-mime-artist-peeking-from-curtain_2934842.htm#query=theater&position=41&from_view=search&track=sph&uuid=e7e8dc74-961c-42fc-8a95-8fcee454bbe7' target='_blank'>&lt;https://www.freepik.com/free-photo/smiling-female-mime-artist-looking-male-mime-artist-peeking-from-curtain_2934842.htm#query=theater&position=41&from_view=search&track=sph&uuid=e7e8dc74-961c-42fc-8a95-8fcee454bbe7&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Bus stop",
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Shopping mall",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "6/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
            {

                ordem: "o",
                validacao: true,
                texto: "Restaurant",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-06.png",
                        title: "Tables",
                        alt:"Photograph of a table set for people.",
                        fonte: "Figure 6: Set table. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_7734844.htm#query=restaurant&position=11&from_view=search&track=sph&uuid=bf2cbd6c-af49-42fb-a3bf-f65f02b1d910' target='_blank'>&lt;https://www.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_7734844.htm#query=restaurant&position=11&from_view=search&track=sph&uuid=bf2cbd6c-af49-42fb-a3bf-f65f02b1d910&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Bus stop",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Shopping mall",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "m",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "7/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            {

                ordem: "o",
                validacao: true,
                texto: "Bus stop",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-07.png",
                        title: "Tables",
                        alt:"Photograph of a man sitting, waiting for a bus.",
                        fonte: "Figure 7: Waiting for the bus. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/young-french-man-waiting-station-bus-using-his-smartphone_25002512.htm#query=bus%20stop&position=23&from_view=search&track=ais&uuid=f6d6ed82-3220-4bfb-85ec-447a871f6b21' target='_blank'>&lt;https://www.freepik.com/free-photo/young-french-man-waiting-station-bus-using-his-smartphone_25002512.htm#query=bus%20stop&position=23&from_view=search&track=ais&uuid=f6d6ed82-3220-4bfb-85ec-447a871f6b21&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Shopping mall",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "m",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "8/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            
            {
                ordem: "h",
                validacao: false,
                texto: "Bus stop",
            },
            {

                ordem: "o",
                validacao: true,
                texto: "Shopping mall",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-08.png",
                        title: "stores",
                        alt:"Photograph of a large building with several stores.",
                        fonte: "Figure 8: Stores. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/indoor-hotel-view_1278394.htm#query=shopping%20mall&position=0&from_view=search&track=ais&uuid=d272b065-7fe0-4930-9e13-83c5150d8629' target='_blank'>&lt;https://www.freepik.com/free-photo/indoor-hotel-view_1278394.htm#query=shopping%20mall&position=0&from_view=search&track=ais&uuid=d272b065-7fe0-4930-9e13-83c5150d8629&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Park",
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Beach",
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "m",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "9/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            
            {
                ordem: "h",
                validacao: false,
                texto: "Bus stop",
            },
            
            {
                ordem: "i",
                validacao: false,
                texto: "Shopping mall",
            },
            {

                ordem: "o",
                validacao: true,
                texto: "Park",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-09.png",
                        title: "trees and flowers",
                        alt:"Photograph of a pathway full of trees and flowers.",
                        fonte: "Figure 9: Flowers. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/caminho-de-concreto-cinza-alem-de-flor-rosa-durante-o-dia-158028/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/caminho-de-concreto-cinza-alem-de-flor-rosa-durante-o-dia-158028/&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            {
                ordem: "j",
                validacao: false,
                texto: "Beach",
            },
           
            {
                ordem: "k",
                validacao: false,
                texto: "Church",
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "m",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "10/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            
            {
                ordem: "h",
                validacao: false,
                texto: "Bus stop",
            },
            
            {
                ordem: "i",
                validacao: false,
                texto: "Shopping mall",
            },
            
            {
                ordem: "j",
                validacao: false,
                texto: "Park",
            },
            
            {
                ordem: "k",
                validacao: false,
                texto: "Church",
            },
            {

                ordem: "o",
                validacao: true,
                texto: "Beach",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-10.png",
                        title: "trees and flowers",
                        alt:"Photograph of a tropical landscape.",
                        fonte: "Figure 10: Island. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/tropical-beach_3501168.htm#query=beach&position=0&from_view=search&track=sph&uuid=88d4e910-dfdc-4bb5-9269-397aaf05a65e' target='_blank'>&lt;https://www.freepik.com/free-photo/tropical-beach_3501168.htm#query=beach&position=0&from_view=search&track=sph&uuid=88d4e910-dfdc-4bb5-9269-397aaf05a65e&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            {
                ordem: "l",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "m",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "11/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            
            {
                ordem: "h",
                validacao: false,
                texto: "Bus stop",
            },
            
            {
                ordem: "i",
                validacao: false,
                texto: "Shopping mall",
            },
            
            {
                ordem: "j",
                validacao: false,
                texto: "Park",
            },
            
            {
                ordem: "k",
                validacao: false,
                texto: "Beach",
            },
            
            {
                ordem: "l",
                validacao: false,
                texto: "Mosque",
            },
            
            {

                ordem: "o",
                validacao: true,
                texto: "Church",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-11.png",
                        title: "Religious building",
                        alt:"Photograph of a religious building in a rural landscape.",
                        fonte: "Figure 11: Religious building 1. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/little-white-church-with-red-roof-reyniskyrka-vik-iceland_10186577.htm#query=church&position=11&from_view=search&track=sph&uuid=e1dbc463-93a3-4b6d-b718-858436502546' target='_blank'>&lt;https://www.freepik.com/free-photo/little-white-church-with-red-roof-reyniskyrka-vik-iceland_10186577.htm#query=church&position=11&from_view=search&track=sph&uuid=e1dbc463-93a3-4b6d-b718-858436502546&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            
            {
                ordem: "m",
                validacao: false,
                texto: "Hospital",
            },
            
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "12/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            
            {
                ordem: "h",
                validacao: false,
                texto: "Bus stop",
            },
            
            {
                ordem: "i",
                validacao: false,
                texto: "Shopping mall",
            },
            
            {
                ordem: "j",
                validacao: false,
                texto: "Park",
            },
            
            {
                ordem: "k",
                validacao: false,
                texto: "Beach",
            },
            
            {
                ordem: "l",
                validacao: false,
                texto: "Church",
            },
            
            {
                ordem: "m",
                validacao: false,
                texto: "Mosque",
            },
            {

                ordem: "o",
                validacao: true,
                texto: "Hospital",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-13.png",
                        title: "Cure",
                        alt:"Photograph of a doctor and a nurse checking a patient’s blood pressure.",
                        fonte: "Figure 13: Patient. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-nurse-doctor-checking-patient_14447081.htm#query=hospital&position=18&from_view=search&track=sph&uuid=49149dfb-17f4-488a-8a90-424858ac10e4' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-nurse-doctor-checking-patient_14447081.htm#query=hospital&position=18&from_view=search&track=sph&uuid=49149dfb-17f4-488a-8a90-424858ac10e4&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
           
           
            {
                ordem: "n",
                validacao: false,
                texto: "Bookstore",
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

        titulo: "13/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            
            {
                ordem: "h",
                validacao: false,
                texto: "Bus stop",
            },
            
            {
                ordem: "i",
                validacao: false,
                texto: "Shopping mall",
            },
            
            {
                ordem: "j",
                validacao: false,
                texto: "Park",
            },
            
            {
                ordem: "k",
                validacao: false,
                texto: "Beach",
            },
            
            {
                ordem: "l",
                validacao: false,
                texto: "Church",
            },
            
            {
                ordem: "m",
                validacao: false,
                texto: "Bookstore",
            },
            {
                ordem: "n",
                validacao: false,
                texto: "Hospital",
            },
            {
                ordem: "o",
                validacao: true,
                texto: "Mosque",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-12.png",
                        title: "Religious building",
                        alt:"Photograph of a religious building in the United Arab Emirates.",
                        fonte: "Figure 12: Religious building 2. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/view-famous-abu-dhabi-sheikh-zayed-mosque-by-night-uae_10585625.htm#query=mosque&position=2&from_view=search&track=sph&uuid=79793645-9171-493c-bdf7-85199a8b56f0' target='_blank'>&lt;https://www.freepik.com/free-photo/view-famous-abu-dhabi-sheikh-zayed-mosque-by-night-uae_10585625.htm#query=mosque&position=2&from_view=search&track=sph&uuid=79793645-9171-493c-bdf7-85199a8b56f0&gt;</a> Accessed on: 12/12/2023.",
                    },
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

        titulo: "14/14 - Places in the city",
        pergunta: {
            texto: "Match the pictures with the appropriate words."        
        },
        respostas: [
            
            {
                ordem: "a",
                validacao: false,
                texto: "Supermarket",
            },  
            {
                ordem: "b",
                validacao: false,
                texto: "Museum",
            },         
            {
                ordem: "c",
                validacao: false,
                texto: "Police station",
            },            
            {
                ordem: "d",
                validacao: false,
                texto: "Drugstore",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Theater",
            },
           
            {
                ordem: "g",
                validacao: false,
                texto: "Restaurant",
            },
            
            {
                ordem: "h",
                validacao: false,
                texto: "Bus stop",
            },
            
            {
                ordem: "i",
                validacao: false,
                texto: "Shopping mall",
            },
            
            {
                ordem: "j",
                validacao: false,
                texto: "Park",
            },
            
            {

                ordem: "o",
                validacao: true,
                texto: "Bookstore",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figura-14.png",
                        title: "Cure",
                        alt:"Photograph of a man reading a book.",
                        fonte: "Figure 14: Books. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/indoor-shot-student-glasses-looking-through-book-his-hands_10110477.htm#query=bookstore%20black%20person&position=13&from_view=search&track=ais&uuid=36df8c85-81d9-4aee-8e02-f0e5bacc9fb7' target='_blank'>&lt;https://www.freepik.com/free-photo/indoor-shot-student-glasses-looking-through-book-his-hands_10110477.htm#query=bookstore%20black%20person&position=13&from_view=search&track=ais&uuid=36df8c85-81d9-4aee-8e02-f0e5bacc9fb7&gt;</a> Accessed on: 12/12/2023.",
                    },
                }
            },
            {
                ordem: "k",
                validacao: false,
                texto: "Beach",
            },
            
            {
                ordem: "l",
                validacao: false,
                texto: "Church",
            },
            
            {
                ordem: "m",
                validacao: false,
                texto: "Mosque",
            },
            {
                ordem: "n",
                validacao: false,
                texto: "Hospital",
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


