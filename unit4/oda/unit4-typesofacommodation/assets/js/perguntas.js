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
            src: "custom/img/imgpergunta.jpg",
            title: "One Piece questions",
            alt:"Imagem sobre o one piece",
            fonte: "Imagem tirada do google no dia 15-03-2024"
        },
    },
    config: {
        acertos_para_vitoria: 0, // 0 = >50% de acertos.
        globalType: "quiz" // caso as perguntas não possuam type, será definido um padrão. (globalType = "") = "quiz"
        // permitirApenas: 0; 0 = todas. Caso o usuário coloque um número como 10, por exemplo, o quiz vai exibir apenas 10 perguntas, mesmo que tenha 11 ou 1000 perguntas.
        // modo = 0; 0 ou "ordenado" significa uma pergunta após a outra. "inverso" ele começa pela última e "aleatorio" ele embaralha, tornando a ordem das perguntas aleatória.
    }
}
var perguntas = [
    { 
        type: "dragindrop",
        titulo: "When you plan a trip, you need a place to stay. There are different types of accommodations to choose from.",
        pergunta: {
            texto: "<strong>Hotel</strong>: A hotel is a comfortable place to stay. You can find hotels in cities and towns. They have rooms with beds, a bathroom, and sometimes a TV. Hotels often provide services like room cleaning and breakfast."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: true,
                imagem: {
                    src: "custom/img/menores/img5.jpg",
                    title: "Drag in drop",
                    alt:"img1",
                },
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }
            },
            {
                ordem: "b",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img4.jpg",
                    title: "Drag in drop",
                    alt:"img2",
                },  
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }           
            },
            {
                ordem: "c",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img2.jpg",
                    title: "Drag in drop",
                    alt:"img3",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img3.jpg",
                    title: "Drag in drop",
                    alt:"img4",
                }, 
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }            
            },
            {
                ordem: "e",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img1.jpg",
                    title: "Drag in drop",
                    alt:"img5",
                },
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }             
            },
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, this is not the hotel."
                }
            
        }
    },
    { 
        type: "dragindrop",
        titulo: "When you plan a trip, you need a place to stay. There are different types of accommodations to choose from.",
        pergunta: {
            texto: "<strong>Hostel</strong>: A hostel is a budget-friendly option. It is like a big house with many rooms. You usually share a room with other travelers. Hostels are great for meeting new people. They may have a communal kitchen where you can cook your meals. "        
        },
        respostas: [
            
           
            {
                ordem: "a",
                validacao: true,
                imagem: {
                    src: "custom/img/menores/img2.jpg",
                    title: "Drag in drop",
                    alt:"img3",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "b",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img4.jpg",
                    title: "Drag in drop",
                    alt:"img2",
                },  
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }           
            },
            {
                ordem: "c",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img3.jpg",
                    title: "Drag in drop",
                    alt:"img4",
                },           
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }  
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img1.jpg",
                    title: "Drag in drop",
                    alt:"img5",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "e",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img5.jpg",
                    title: "Drag in drop",
                    alt:"img1",
                },
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }
            },
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Nice job! You’re making progress.", 
                },
            negativo: {
                    texto: "Almost there! But this is not the hostel."
                }
            
        }
    },
    { 
        type: "dragindrop",
        titulo: "When you plan a trip, you need a place to stay. There are different types of accommodations to choose from.",
        pergunta: {
            texto: "<strong>Camping</strong>: Camping is an adventurous way to stay close to nature. You can set up a tent in a camping site. It's fun to sleep under the stars. Camping sites often have bathrooms and places to cook. "        
        },
        respostas: [            
            {
                ordem: "a",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img5.jpg",
                    title: "Drag in drop",
                    alt:"img1",
                },
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }
            },
            {
                ordem: "b",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img2.jpg",
                    title: "Drag in drop",
                    alt:"img3",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "c",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img1.jpg",
                    title: "Drag in drop",
                    alt:"img5",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img4.jpg",
                    title: "Drag in drop",
                    alt:"img2",
                },  
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }           
            },
            {
                ordem: "e",
                validacao: true,
                imagem: {
                    src: "custom/img/menores/img3.jpg",
                    title: "Drag in drop",
                    alt:"img4",
                },           
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }  
            },
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Wow, nice!", 
                },
            negativo: {
                    texto: "What a pity, this is not the camping."
                }
            
        }
    },
    { 
        type: "dragindrop",
        titulo: "When you plan a trip, you need a place to stay. There are different types of accommodations to choose from.",
        pergunta: {
            texto: "<strong>Resort</strong>: A resort is like a holiday village. It has everything you need for a relaxing stay – swimming pools, restaurants, and entertainment. Resorts are often near the beach or in beautiful natural areas. "        
        },
        respostas: [            
            {
                ordem: "a",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img5.jpg",
                    title: "Drag in drop",
                    alt:"img1",
                },
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }
            },
            {
                ordem: "b",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img2.jpg",
                    title: "Drag in drop",
                    alt:"img3",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "c",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img3.jpg",
                    title: "Drag in drop",
                    alt:"img4",
                },           
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }  
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img1.jpg",
                    title: "Drag in drop",
                    alt:"img5",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "e",
                validacao: true,
                imagem: {
                    src: "custom/img/menores/img4.jpg",
                    title: "Drag in drop",
                    alt:"img2",
                },  
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }           
            },
            
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "You’re on the right track! Keep challenging yourself.", 
                },
            negativo: {
                    texto: "Unfortunately, this is not the resort."
                }
            
        }
    },
    { 
        type: "dragindrop",
        titulo: "When you plan a trip, you need a place to stay. There are different types of accommodations to choose from.",
        pergunta: {
            texto: "<strong>Apartment</strong>: An apartment is like a home away from home. It has a kitchen, a living room, and separate bedrooms. Apartments are perfect for families or groups of friends. You can find apartments in the city or near tourist attractions. "        
        },
        respostas: [            
            {
                ordem: "a",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img5.jpg",
                    title: "Drag in drop",
                    alt:"img1",
                },
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }
            },
            {
                ordem: "b",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img2.jpg",
                    title: "Drag in drop",
                    alt:"img3",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
           
            {
                ordem: "c",
                validacao: true,
                imagem: {
                    src: "custom/img/menores/img1.jpg",
                    title: "Drag in drop",
                    alt:"img5",
                },     
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }        
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img4.jpg",
                    title: "Drag in drop",
                    alt:"img2",
                },  
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }           
            },
            
            {
                ordem: "e",
                validacao: false,
                imagem: {
                    src: "custom/img/menores/img3.jpg",
                    title: "Drag in drop",
                    alt:"img4",
                },           
                relacionarCom: { 
                    texto: "Drag and drop the correct image to the field below." 
                }  
            },
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Nice work!", 
                },
            negativo: {
                    texto: "Phew, that was tough, but this is not the apartment."
                }
            
        }
    },
   
   
  
]