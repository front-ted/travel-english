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
var perguntas = [
    { 

        titulo: "1. Restaurant staff",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Barman/Barwoman",
            },  
 {
                ordem: "b",
                validacao: false,
                texto: "Sommelier",
            },         
{
                 ordem: "c",
                validacao: false,
                texto: "Manager",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Host/Hostess",
            },
            {
                ordem: "e",
                validacao: false,
                texto: "Chef",
            },
            {

                ordem: "f",
                validacao: true,
                texto: "Waiter/Waitress",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure1.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a woman carrying a tray containing a plate of food and a beverage.",
                        fonte: "Figure 1: Woman carrying a tray. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/front-view-woman-working-service-industry_61279731.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/front-view-woman-working-service-industry_61279731.htm&gt;</a> Accessed on: 12/05/2023.",
                    },
                }
            },
       
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "1. Restaurant staff",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
           
            {
                ordem: "c",
                validacao: true,
                texto: "Host/Hostess",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure2.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a woman carrying a tray containing a plate of food and a beverage.",
                        fonte: "Figure 2: Woman with tablet. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/portrait-asian-woman-manager-standing-with-tablet-front-cafe-entrance-welcomes-guests_35982111.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/portrait-asian-woman-manager-standing-with-tablet-front-cafe-entrance-welcomes-guests_35982111.htm&gt;</a> Accessed on: 12/05/2023.",
                     
                    },
                }
            },
       
            {
                ordem: "a",
                validacao: false,
                texto: "Barman/Barwoman",
            },  
 {
                ordem: "b",
                validacao: false,
                texto: "Sommelier",
            },         
{
                 ordem: "d",
                validacao: false,
                texto: "Manager",
            },
  
            {
                ordem: "e",
                validacao: false,
                texto: "Chef",
            },
{
               ordem: "f",
               validacao: false,
               texto: "Waiter/Waitress",
           },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, one or more items are incorrect."
                }
            
        }
    },
    { 

        titulo: "1. Restaurant staff",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
           
            {
                ordem: "c",
                validacao: true,
                texto: "Manager",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure3.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a woman sitting at a desk, looking at a laptop screen.",
                        fonte: "Figure 3: Businesswoman. Source:   <a class='link-fonte' href='https://unsplash.com/photos/asian-businesswoman-working-on-laptop-at-her-desk-at-the-office-rfAcG6B1hDM' target='_blank'>&lt;https://unsplash.com/photos/asian-businesswoman-working-on-laptop-at-her-desk-at-the-office-rfAcG6B1hDM&gt;</a> Accessed on: 12/05/2023.",
                     
                    },
                }
            },
       
            {
                ordem: "a",
                validacao: false,
                texto: "Barman/Barwoman",
            },  
 {
                ordem: "b",
                validacao: false,
                texto: "Sommelier",
            },         
{
                 ordem: "d",
                validacao: false,
                texto: "Host/Hostess",
            },
  
            {
                ordem: "e",
                validacao: false,
                texto: "Chef",
            },
{
               ordem: "f",
               validacao: false,
               texto: "Waiter/Waitress",
           },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "1. Restaurant staff",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Barman/Barwoman",
            },  
 {
                ordem: "b",
                validacao: false,
                texto: "Sommelier",
            },         
{
                 ordem: "c",
                validacao: false,
                texto: "Manager",
            },
            
            {
                ordem: "d",
                validacao: true,
                texto: "Chef",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure4.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a man pouring rice into a pan.",
                        fonte: "Figure 4: Man cooking. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/male-chef-kitchen-cooking_13637529.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/male-chef-kitchen-cooking_13637529.htm&gt; Accessed on: 12/05/2023.</a>",
                     
                    },
                }
            },
            {
                ordem: "e",
                validacao: false,
                texto: "Host/Hostess",
            },
       
{
               ordem: "f",
               validacao: false,
               texto: "Waiter/Waitress",
           },
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "1. Restaurant staff",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Barman/Barwoman",
            },  
            {
                ordem: "b",
                validacao: true,
                texto: "Sommelier",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure5.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a woman standing in front of a counter, holding a glass of red wine.",
                        fonte: "Figura 5: Woman drinking wine. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/comparing-sorts-wine_5401152.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/comparing-sorts-wine_5401152.htm&gt;</a>  Accessed on: 12/05/2023.",
                     
                    },
                }
            },
            {
                ordem: "c",
               validacao: false,
               texto: "Manager",
           },
           {
               ordem: "d",
               validacao: false,
               texto: "Host/Hostess",
           },
           {
               ordem: "e",
               validacao: false,
               texto: "chef",
           },
   
           {
               ordem: "f",
               validacao: false,
               texto: "Waiter/Waitress",
           },
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "1. Restaurant staff",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "c",
                validacao: false,
                texto: "Manager",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Host/Hostess",
            },
            {
                ordem: "e",
                validacao: false,
                texto: "Somelier",
            },
            {
                ordem: "a",
                validacao: true,
                texto: "Barman/Barwoman",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure6.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a man preparing a cocktail. There is a bar in the background.",
                        fonte: "Figure 6: Man preparing a cocktail. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-bartender-preparing-drink_44612254.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-bartender-preparing-drink_44612254.htm&gt;</a>  Accessed on: 12/05/2023.",
                     
                    },
                }
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Sommelier",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Chef",
            },
            
       
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
         
           
            
            {
                ordem: "a",
                validacao: true,
                texto: "Food truck",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure7.jpg",
                        title: "Drag in drop",
                        alt:"Several people standing in line in front of a blue truck with a sign that reads “Fish & Chips – Freshly Hand Battered",
                        fonte: "Figure 7: Fish and chips. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/food-truck-blue-fish-chips-2227960/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/food-truck-blue-fish-chips-2227960/&gt;</a>  Accessed on: 12/05/2023.",
                     
                    },
                },
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Virtual Restaurant",
            },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
           
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            
            {
                ordem: "a",
                validacao: true,
                texto: "Fast food",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure8.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a McDonald’s restaurant.",
                        fonte: "Figure 8: McDonald’s. Source: <a class='link-fonte' href='https://unsplash.com/photos/a-mcdonalds-restaurant-is-lit-up-at-night-y8fS7CSN-Vw' target='_blank'>&lt;https://unsplash.com/photos/a-mcdonalds-restaurant-is-lit-up-at-night-y8fS7CSN-Vw&gt;</a>  Accessed on: 12/05/2023.",
                     
                    },
                }
            },
       
   
           {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Virtual Restaurant",
            },
            
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
          
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Virtual Restaurant",
            },
            
            {
                ordem: "a",
                validacao: true,
                texto: "Fine dining",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure9.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a foie gras dish on white china.",
                        fonte: "Figure 9: Foie gras. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/grilled-foie-gras_1038178.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/grilled-foie-gras_1038178.htm&gt;</a>  Accessed on: 12/05/2023.",
                     
                    },
                }
            },
       
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
          
            
            {
                ordem: "j",
                validacao: true,
                texto: "Casual dining",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure10.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a group of people having a meal at a restaurant.",
                        fonte: "Figure 10: Friends. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/close-up-happy-people-celebrating-together_21252474.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/close-up-happy-people-celebrating-together_21252474.htm&gt;</a>  Accessed on: 12/05/2023.",
                     
                    },
                }
            },
       
     {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
           
           
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Virtual Restaurant",
            },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            
            {
                ordem: "i",
                validacao: false,
                texto: "Virtual Restaurant",
            },
            {
                ordem: "a",
                validacao: true,
                texto: "Bistro",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure11.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a restaurant with tables outdoors.",
                        fonte: "Figure 11: Outdoor restaurant. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/arquitetura-bistro-construcao-predio-4451711/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/arquitetura-bistro-construcao-predio-4451711/&gt;</a>  Accessed on: 12/05/2023."
                     
                    },
                }
            },
       
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
            
            {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
          
            {
                ordem: "a",
                validacao: true,
                texto: "Pub",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure12.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a restaurant with a bar on the left and tables on the right.",
                        fonte: "Figure 12: Restaurant at night. Source: <a class='link-fonte' href='https://unsplash.com/photos/empty-chairs-and-tables-inside-lighte-room-cnTdKzMOBns' target='_blank'>&lt;https://unsplash.com/photos/empty-chairs-and-tables-inside-lighte-room-cnTdKzMOBns&gt;</a> Accessed on: 12/05/2023."
                     
                    },
                }
            },
       
   
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            
            {
                ordem: "i",
                validacao: false,
                texto: "Virtual Restaurant",
            },
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
            {
                ordem: "i",
                validacao: false,
                texto: "Virtual Restaurant",
            },
            
            {
                ordem: "f",
                validacao: true,
                texto: "Café",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure13.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a man serving a cup of coffee to a woman through a restaurant counter.",
                        fonte: "Figure 13: Counter. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/mulher-sentada-na-cadeira-do-bar-perto-do-barista-2506993/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/mulher-sentada-na-cadeira-do-bar-perto-do-barista-2506993/&gt;</a> Accessed on: 12/05/2023."
                     
                    },
                }
            },
       
   {
                ordem: "g",
                validacao: false,
                texto: "Diner",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Bakery",
            },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Café",
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Diner",
            },
            
            {
                ordem: "h",
                validacao: true,
                texto: "Bakery",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure15.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a woman behind a counter. Behind her and on the counter there are different kinds of bread and cookies.",
                        fonte: "Figure 15: Cookies. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-woman-working-bakery_39912459.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-woman-working-bakery_39912459.htm&gt;</a> Accessed on: 12/05/2023."
                     
                    },
                }
            },
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
           
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "2. Types of restaurants",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Food truck",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Fast food",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Fine dining",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Casual dining",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Bistro",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Pub",
            },
            {
                ordem: "f",
                validacao: false,
                texto: "Café",
            },
            {
                ordem: "g",
                validacao: false,
                texto: "Diner",
            },
            {
                ordem: "h",
                validacao: false,
                texto: "Bakery",
            },
            
            {
                ordem: "i",
                validacao: true,
                texto: "Virtual restaurant",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure16.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a woman ordering sushi on a tablet.",
                        fonte: "Figure 16: Order online. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/high-angle-woman-ordering-sushi_33753151.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/high-angle-woman-ordering-sushi_33753151.htm&gt;</a> Accessed on: 12/05/2023."
                     
                    },
                }
            },
       
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Meals",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Dinner",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Snack",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Lunch",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Brunch",
            },
           
           
            {
                ordem: "e",
                validacao: true,
                texto: "Breakfast",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure17.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a cup of coffee and a piece of bread.",
                        fonte: "Figure 17: Coffee and bread. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/xicara-de-cafe-e-pao-414555/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/xicara-de-cafe-e-pao-414555/&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Main dish/Entrée",
            },
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Meals",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Dinner",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Snack",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Lunch",
            },
        
           
            
            {
                ordem: "d",
                validacao: true,
                texto: "Brunch",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure18.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of different dishes on a table, containing eggs, bacon, waffle, fruit, vegetables and coffee.",
                        fonte: "Figure 18: Delicious meal. Source: <a class='link-fonte' href='https://unsplash.com/photos/white-ceramic-bowl-with-food-krsKfCC1lYw' target='_blank'>&lt;https://unsplash.com/photos/white-ceramic-bowl-with-food-krsKfCC1lYw&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
      
   
           
            {
                ordem: "b",
                validacao: false,
                texto: "Main dish/Entrée",
            },
          
           
            {
                ordem: "e",
                validacao: false,
                texto: "Breakfast",
            },
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Meals",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
           {
                ordem: "a",
                validacao: false,
                texto: "Dinner",
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Snack",
            },
            {
                ordem: "c",
                validacao: true,
                texto: "Lunch",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure19.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a person eating a plate of salad.",
                        fonte: "Figure 19: Salad. Source: <a class='link-fonte' href='https://unsplash.com/photos/person-eating-food--9CjvlbUGhY' target='_blank'>&lt;https://unsplash.com/photos/person-eating-food--9CjvlbUGhY&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
       
   
            
         
            {
                ordem: "d",
                validacao: false,
                texto: "Brunch",
            },
           
            {
                ordem: "d",
                validacao: false,
                texto: "Breakfast",
            },
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Meals",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Dinner",
            },
       
          
           
            {
                ordem: "b",
                validacao: true,
                texto: "Snack",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure20.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a tray containing several bags of popcorn.",
                        fonte: "Figure 20: Popcorn. Source: <a class='link-fonte' href='https://unsplash.com/photos/white-and-red-plastic-packs-9FDI-_E29fk' target='_blank'>&lt;https://unsplash.com/photos/white-and-red-plastic-packs-9FDI-_E29fk&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
        {
                ordem: "c",
                validacao: false,
                texto: "Lunch",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Brunch",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Breakfast",
            },
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Meals",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
           
            {
                ordem: "a",
                validacao: true,
                texto: "Dinner",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure21.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a table set with places, wine glasses and candles.",
                        fonte: "Figure 21: Candles. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/conjunto-de-loucas-na-mesa-de-madeira-marrom-262882/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/conjunto-de-loucas-na-mesa-de-madeira-marrom-262882/&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
       
          
       
            {
                ordem: "b",
                validacao: false,
                texto: "Snack",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Lunch",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Brunch",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Breakfast",
            },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Parts of a meal",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                texto: "Dessert",
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Main dish/Entrée",
            },
           
            {
                ordem: "c",
                validacao: true,
                texto: "Appetizer",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure22.png",
                        title: "Drag in drop",
                        alt:"Photograph of a plate of soup.",
                        fonte: "Figure 22: Soup. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/foco-raso-fotografia-de-sopa-de-abobora-1277483/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/foco-raso-fotografia-de-sopa-de-abobora-1277483/&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Snack",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Lunch",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Brunch",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Breakfast",
            },
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Parts of a meal",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
           
            {
                ordem: "a",
                validacao: true,
                texto: "Main dish/Entrée",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure23.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a disch containing salmon and rice with vegetables.",
                        fonte: "Figure 23: Salmon. Source: <a class='link-fonte' href='https://www.pexels.com/pt-br/foto/foto-de-close-up-de-comida-3655916/' target='_blank'>&lt;https://www.pexels.com/pt-br/foto/foto-de-close-up-de-comida-3655916/&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
       
            {
                ordem: "b",
                validacao: false,
                texto: "Dessert",
            },
           
            {
                ordem: "c",
                validacao: false,
                texto: "Appetizer",
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Snack",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Lunch",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Brunch",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Breakfast",
            },
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
    { 

        titulo: "3. Parts of a meal",
        pergunta: {
            texto: "Match the images with the correct terms or words."        
        },
        respostas: [
            {
                ordem: "c",
                validacao: false,
                texto: "Lunch",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Brunch",
            },
           
            {
                ordem: "e",
                validacao: false,
                texto: "Breakfast",
            },  
            {
                ordem: "a",
                validacao: true,
                texto: "Dessert",
               
                relacionarCom: { 
                   
                    imagem: {
                        src: "custom/img/figure24.jpg",
                        title: "Drag in drop",
                        alt:"Photograph of a slice of apple pie with apples in the background.",
                        fonte: "Figure 24: Apple pie. Source: <a class='link-fonte' href='https://www.freepik.com/free-photo/high-angle-plate-with-thanksgiving-apple-pie-slice_9700286.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/high-angle-plate-with-thanksgiving-apple-pie-slice_9700286.htm&gt;</a> Accessed on: 12/06/2023."
                     
                    },
                }
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Main dish/Entrée",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Appetizer",
            },
           
       
            {
                ordem: "b",
                validacao: false,
                texto: "Snack",
            },
           
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Great job!", 
                },
            negativo: {
                    texto: "Unfortunately, that's not correct."
                }
            
        }
    },
]