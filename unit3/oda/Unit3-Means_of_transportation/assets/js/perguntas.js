var estruturageral = {
    mensagemfinal: {
        positiva:{
           texto: [
                "Great job! You nailed it!",
                "If you want to, you can practice again by clicking on the button bellow."
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

        titulo: "01/10 - Means of transportation",
        pergunta: {
            texto: "I’ll catch the <strong>bus</strong> to the airport."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-01-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a large vehicle.",
                    fonte: "Figure 14: Means of transportation 1. Source:  <a class='link-fonte' href='https://unsplash.com/photos/parked-blue-and-black-compertur-bus-T5jzpRTVF1U' target='_blank'>&lt;https://unsplash.com/photos/parked-blue-and-black-compertur-bus-T5jzpRTVF1U&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Bus",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
           
            {

                ordem: "c",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-03-min.png",
                    title: "large vehicle",
                    alt:"Photograph of an underground vehicle.",
                    fonte: "Figure 16: Means of transportation 3. Source:  <a class='link-fonte' href='https://unsplash.com/photos/person-near-train-qZ6if8WXl7E' target='_blank'>&lt;https://unsplash.com/photos/person-near-train-qZ6if8WXl7E&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Subway",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "g",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-07-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a woman crossing a street on a two-wheeled motor vehicle.",
                    fonte: "Figure 20: Crosswalk. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Scooter",
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

        titulo: "02/10 - Means of transportation",
        pergunta: {
            texto: "Let’s explore the countryside by <strong>train</strong>! "        
        },
        respostas: [
          
            {

                ordem: "b",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-02-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a long vehicle on trails in the countryside.",
                    fonte: "Figure 15: Means of transportation 2. Source:  <a class='link-fonte' href='https://unsplash.com/photos/orange-train-between-fall-trees-El5zuQAtfeo' target='_blank'>&lt;https://unsplash.com/photos/orange-train-between-fall-trees-El5zuQAtfeo&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Train",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
           
            {

                ordem: "g",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-07-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a woman crossing a street on a two-wheeled motor vehicle.",
                    fonte: "Figure 20: Crosswalk. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Scooter",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "j",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-10-min.png",
                    title: "large vehicle",
                    alt:"Sleek silver camper van parked on gravel, surrounded by green trees under a clear blue sky, with a snow-capped mountain in the backdrop.",
                    fonte: "Figure 23: Tourism. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/young-adults-travelling-winter-time_21088082.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/young-adults-travelling-winter-time_21088082.htm&gt;</a> Accessed on: 12/16/2023.",
                },
                // texto: "Van",
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

        titulo: "03/10 - Means of transportation",
        pergunta: {
            texto: "In the city, it's convenient to navigate using the <strong>subway</strong>. "        
        },
        respostas: [
            
           
            {

                ordem: "c",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-03-min.png",
                    title: "large vehicle",
                    alt:"Photograph of an underground vehicle.",
                    fonte: "Figure 16: Means of transportation 3. Source:  <a class='link-fonte' href='https://unsplash.com/photos/person-near-train-qZ6if8WXl7E' target='_blank'>&lt;https://unsplash.com/photos/person-near-train-qZ6if8WXl7E&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Subway",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "d",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-04-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a yacht docked in a sea port.",
                    fonte: "Figure 17: Yacht. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/marine-parking-boats-yachts-turkey-yacht-docked-sea-port_11176177.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/marine-parking-boats-yachts-turkey-yacht-docked-sea-port_11176177.htm&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "boat",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-05-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a man riding down the hill.",
                    fonte: "Figure 18: Down the hill. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Bike",
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

        titulo: "04/10 - Means of transportation",
        pergunta: {
            texto: "We should go on a <strong>boat</strong> tour."        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-01-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a large vehicle.",
                    fonte: "Figure 14: Means of transportation 1. Source:  <a class='link-fonte' href='https://unsplash.com/photos/parked-blue-and-black-compertur-bus-T5jzpRTVF1U' target='_blank'>&lt;https://unsplash.com/photos/parked-blue-and-black-compertur-bus-T5jzpRTVF1U&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Bus",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            
            {

                ordem: "d",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-04-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a yacht docked in a sea port.",
                    fonte: "Figure 17: Yacht. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/marine-parking-boats-yachts-turkey-yacht-docked-sea-port_11176177.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/marine-parking-boats-yachts-turkey-yacht-docked-sea-port_11176177.htm&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Boat",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-05-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a man riding down the hill.",
                    fonte: "Figure 18: Down the hill. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Bike",
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

        titulo: "05/10 - Means of transportation",
        pergunta: {
            texto: "Renting a <strong>bike</strong> is a great way to explore a new city. "        
        },
        respostas: [
           
            {

                ordem: "b",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-02-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a long vehicle on trails in the countryside.",
                    fonte: "Figure 15: Means of transportation 2. Source:  <a class='link-fonte' href='https://unsplash.com/photos/orange-train-between-fall-trees-El5zuQAtfeo' target='_blank'>&lt;https://unsplash.com/photos/orange-train-between-fall-trees-El5zuQAtfeo&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Train",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "d",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-04-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a yacht docked in a sea port.",
                    fonte: "Figure 17: Yacht. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/marine-parking-boats-yachts-turkey-yacht-docked-sea-port_11176177.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/marine-parking-boats-yachts-turkey-yacht-docked-sea-port_11176177.htm&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Boat",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "e",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-05-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a man riding down the hill.",
                    fonte: "Figure 18: Down the hill. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Bike",
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

        titulo: "06/10 - Means of transportation",
        pergunta: {
            texto: "I feel a little afraid when I go on an <strong>airplane</strong>, but it's fast and fun!"        
        },
        respostas: [
           
          
            {

                ordem: "e",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-05-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a man riding down the hill.",
                    fonte: "Figure 18: Down the hill. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/pensive-man-riding-down-hill_12116232.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Bike",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "f",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-06-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a flying vehicle in the sky.",
                    fonte: "Figure 19: Air travel. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/airplane-flying-cloudy-sky_5869139.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/airplane-flying-cloudy-sky_5869139.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Airplane",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "g",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-07-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a woman crossing a street on a two-wheeled motor vehicle.",
                    fonte: "Figure 20: Crosswalk. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Scooter",
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

        titulo: "07/10 - Means of transportation",
        pergunta: {
            texto: "In the tourist area, you can rent a <strong>scooter</strong> for sightseeing."        
        },
        respostas: [
           
            {

                ordem: "g",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-07-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a woman crossing a street on a two-wheeled motor vehicle.",
                    fonte: "Figure 20: Crosswalk. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/beautiful-belarus-person-city_25610045.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Scooter",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "h",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-08-min.png",
                    title: "large vehicle",
                    alt:"Person sitting on a black motorcycle, holding a helmet, with a modern building in the background.",
                    fonte: "Figure 21: Lipstick. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-senior-woman-with-motorcycle_74765898.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-senior-woman-with-motorcycle_74765898.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Motorcycle",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "i",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-09-min.png",
                    title: "large vehicle",
                    alt:"Mud-covered SUV in front of a snowy mountain, highlighting its off-road capabilities.",
                    fonte: "Figure 22: Countryside. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm&gt;</a> Accessed on: 12/16/2023.",
                },
                // texto: "Car",
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

        titulo: "08/10 - Means of transportation",
        pergunta: {
            texto: "Would you like to travel on a <strong>motorcycle</strong>?"        
        },
        respostas: [
            {

                ordem: "a",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-01-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a large vehicle.",
                    fonte: "Figure 14: Means of transportation 1. Source:  <a class='link-fonte' href='https://unsplash.com/photos/parked-blue-and-black-compertur-bus-T5jzpRTVF1U' target='_blank'>&lt;https://unsplash.com/photos/parked-blue-and-black-compertur-bus-T5jzpRTVF1U&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Bus",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            
            {

                ordem: "h",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-08-min.png",
                    title: "large vehicle",
                    alt:"Person sitting on a black motorcycle, holding a helmet, with a modern building in the background.",
                    fonte: "Figure 21: Lipstick. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/medium-shot-senior-woman-with-motorcycle_74765898.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/medium-shot-senior-woman-with-motorcycle_74765898.htm&gt;</a> Accessed on: 12/14/2023.",
                },
                // texto: "Motorcycle",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "i",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-09-min.png",
                    title: "large vehicle",
                    alt:"Mud-covered SUV in front of a snowy mountain, highlighting its off-road capabilities.",
                    fonte: "Figure 22: Countryside. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm&gt;</a> Accessed on: 12/16/2023.",
                },
                // texto: "Car",
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

        titulo: "09/10 - Means of transportation",
        pergunta: {
            texto: "Renting a <strong>car</strong> is a good option for exploring remote areas. "        
        },
        respostas: [
         
            {

                ordem: "b",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-02-min.png",
                    title: "large vehicle",
                    alt:"Photograph of a long vehicle on trails in the countryside.",
                    fonte: "Figure 15: Means of transportation 2. Source:  <a class='link-fonte' href='https://unsplash.com/photos/orange-train-between-fall-trees-El5zuQAtfeo' target='_blank'>&lt;https://unsplash.com/photos/orange-train-between-fall-trees-El5zuQAtfeo&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Train",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
           
            {

                ordem: "i",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-09-min.png",
                    title: "large vehicle",
                    alt:"Mud-covered SUV in front of a snowy mountain, highlighting its off-road capabilities.",
                    fonte: "Figure 22: Countryside. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm&gt;</a> Accessed on: 12/16/2023.",
                },
                // texto: "Car",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "j",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-10-min.png",
                    title: "large vehicle",
                    alt:"Sleek silver camper van parked on gravel, surrounded by green trees under a clear blue sky, with a snow-capped mountain in the backdrop.",
                    fonte: "Figure 23: Tourism. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/young-adults-travelling-winter-time_21088082.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/young-adults-travelling-winter-time_21088082.htm&gt;</a> Accessed on: 12/16/2023.",
                },
                // texto: "Van",
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

        titulo: "10/10 - Means of transportation",
        pergunta: {
            texto: "The <strong>van</strong> shuttle will take us from the hotel to the tourist attractions."        
        },
        respostas: [
           
            {

                ordem: "c",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-03-min.png",
                    title: "large vehicle",
                    alt:"Photograph of an underground vehicle.",
                    fonte: "Figure 16: Means of transportation 3. Source:  <a class='link-fonte' href='https://unsplash.com/photos/person-near-train-qZ6if8WXl7E' target='_blank'>&lt;https://unsplash.com/photos/person-near-train-qZ6if8WXl7E&gt;</a> Accessed on: 12/12/2023.",
                },
                // texto: "Subway",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
          
            {

                ordem: "i",
                validacao: false,
               
                imagem: {
                    src: "custom/img/imagem-09-min.png",
                    title: "large vehicle",
                    alt:"Mud-covered SUV in front of a snowy mountain, highlighting its off-road capabilities.",
                    fonte: "Figure 22: Countryside. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/full-shot-couple-near-car_10970765.htm&gt;</a> Accessed on: 12/16/2023.",
                },
                // texto: "Car",
                relacionarCom: { 
                   
                    texto: "Drag and drop the right word here.",
                }
            },
            {

                ordem: "j",
                validacao: true,
               
                imagem: {
                    src: "custom/img/imagem-10-min.png",
                    title: "large vehicle",
                    alt:"Sleek silver camper van parked on gravel, surrounded by green trees under a clear blue sky, with a snow-capped mountain in the backdrop.",
                    fonte: "Figure 23: Tourism. Source:  <a class='link-fonte' href='https://www.freepik.com/free-photo/young-adults-travelling-winter-time_21088082.htm' target='_blank'>&lt;https://www.freepik.com/free-photo/young-adults-travelling-winter-time_21088082.htm&gt;</a> Accessed on: 12/16/2023.",
                },
                // texto: "Van",
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


