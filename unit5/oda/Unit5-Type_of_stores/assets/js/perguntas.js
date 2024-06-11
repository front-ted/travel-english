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
var perguntas = [
    { 

        titulo: "Types of stores",
        pergunta: {
            texto: "Match the products with the correspondent stores."        
        },
        respostas: [
           
            {
                ordem: "a",
                validacao: true,
                texto: "Bread",
                imagem: {
                    src: "custom/img/opt1.png",
                    title: "Drag in drop",
                    alt:"Image of a piece of bread with a slice on the side.",
                },
                relacionarCom: { 
                    texto: "Supermarket",
                    imagem: {
                        src: "custom/img/img1.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a supermarket row.",
                        
                    },
                }
            },
            {
                ordem: "b",
                validacao: true,
                texto: "Pain killers",
                imagem: {
                    src: "custom/img/opt4.png",
                    title: "Drag in drop",
                    alt:"Illustration of two bottles of medication.",
                },
                relacionarCom: { 
                    texto: "Drugstore",
                    imagem: {
                        src: "custom/img/img2.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a drugstore, with medications on shelves and computers on a counter.",
                        
                    },
                }
            },
            {
                ordem: "c",
                validacao: true,
                texto: "Sneakers",
                imagem: {
                    src: "custom/img/opt8.png",
                    title: "Drag in drop",
                    alt:"Illustration of a pair of running shoes.",
                },
                relacionarCom: { 
                    texto: "Shoe store",
                    imagem: {
                        src: "custom/img/img3.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of shoes displayed on shelves.",
                        
                    },
                }
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

        titulo: "Types of stores",
        pergunta: {
            texto: "Match the products with the correspondent stores."        
        },
        respostas: [
            {
                ordem: "c",
                validacao: true,
                texto: "Smartphone",
                imagem: {
                    src: "custom/img/opt17.png",
                    title: "Drag in drop",
                    alt:"llustration of a smartphone.",
                },
                relacionarCom: { 
                    texto: "Electronics store",
                    imagem: {
                        src: "custom/img/img6.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of an electronics store.",
                        
                    },
                }
            },
           
           
            {
                ordem: "b",
                validacao: true,
                texto: "Jacket",
                imagem: {
                    src: "custom/img/opt11.png",
                    title: "Drag in drop",
                    alt:"Illustration of a winter jacket.",
                },
                relacionarCom: { 
                    texto: "Clothing store",
                    imagem: {
                        src: "custom/img/img4.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a store with different kinds of clothes on hangs.",
                        
                    },
                }
            },
           
            {
                ordem: "a",
                validacao: true,
                texto: "Books",
                imagem: {
                    src: "custom/img/opt14.png",
                    title: "Drag in drop",
                    alt:"Illustration of a pile of books.",
                },
                relacionarCom: { 
                    texto: "Bookstore",
                    imagem: {
                        src: "custom/img/img5.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a bookstore.",
                        
                    },
                }
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

        titulo: "Types of stores",
        pergunta: {
            texto: "Match the products with the correspondent stores."        
        },
        respostas: [
           
            {
                ordem: "a",
                validacao: true,
                texto: "Soda",
                imagem: {
                    src: "custom/img/opt2.png",
                    title: "Drag in drop",
                    alt:"Illustration of two cans of soda.",
                },
                relacionarCom: { 
                    texto: "Supermarket",
                    imagem: {
                        src: "custom/img/img1.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a supermarket row.",
                        
                    },
                }
            },
            {
                ordem: "b",
                validacao: true,
                texto: "Deodorant",
                imagem: {
                    src: "custom/img/opt5.png",
                    title: "Drag in drop",
                    alt:"Illustration of a dry stick deodorant.",
                },
                relacionarCom: { 
                    texto: "Drugstore",
                    imagem: {
                        src: "custom/img/img2.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a drugstore, with medications on shelves and computers on a counter.",
                        
                    },
                }
            },
            {
                ordem: "c",
                validacao: true,
                texto: "Boots",
                imagem: {
                    src: "custom/img/opt9.png",
                    title: "Drag in drop",
                    alt:"Illustration of a pair of boots.",
                },
                relacionarCom: { 
                    texto: "Shoe store",
                    imagem: {
                        src: "custom/img/img3.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of shoes displayed on shelves.",
                        
                    },
                }
            },
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Nice work! You did it!", 
                },
            negativo: {
                    texto: "Unfortunately, one or more items are incorrect.."
                }
            
        }
    },
    { 

        titulo: "Types of stores",
        pergunta: {
            texto: "Match the products with the correspondent stores."        
        },
        respostas: [
            {
                ordem: "c",
                validacao: true,
                texto: "Laptop",
                imagem: {
                    src: "custom/img/opt18.png",
                    title: "Drag in drop",
                    alt:"Illustration of a laptop.",
                },
                relacionarCom: { 
                    texto: "Electronics store",
                    imagem: {
                        src: "custom/img/img6.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of an electronics store.",
                        
                    },
                }
            },
           
           
            {
                ordem: "b",
                validacao: true,
                texto: "T-Shirt",
                imagem: {
                    src: "custom/img/opt12.png",
                    title: "Drag in drop",
                    alt:"Illustration of a t-shirt.",
                },
                relacionarCom: { 
                    texto: "Clothing store",
                    imagem: {
                        src: "custom/img/img4.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a store with different kinds of clothes on hangs.",
                        
                    },
                }
            },
           
            {
                ordem: "a",
                validacao: true,
                texto: "Notebooks",
                imagem: {
                    src: "custom/img/opt15.png",
                    title: "Drag in drop",
                    alt:"Illustration of two notebooks.",
                },
                relacionarCom: { 
                    texto: "Bookstore",
                    imagem: {
                        src: "custom/img/img5.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a bookstore.",
                        
                    },
                }
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

        titulo: "Types of stores",
        pergunta: {
            texto: "Match the products with the correspondent stores."        
        },
        respostas: [
           
            {
                ordem: "a",
                validacao: true,
                texto: "Cheese",
                imagem: {
                    src: "custom/img/opt3.png",
                    title: "Drag in drop",
                    alt:"Illustration of a piece of cheese.",
                },
                relacionarCom: { 
                    texto: "Supermarket",
                    imagem: {
                        src: "custom/img/img1.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a supermarket row.",
                        
                    },
                }
            },
            {
                ordem: "b",
                validacao: true,
                texto: "Vitamins",
                imagem: {
                    src: "custom/img/opt6.png",
                    title: "Drag in drop",
                    alt:"Illustration of a bottle of vitamins.",
                },
                relacionarCom: { 
                    texto: "Drugstore",
                    imagem: {
                        src: "custom/img/img2.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a drugstore, with medications on shelves and computers on a counter.",
                        
                    },
                }
            },
            {
                ordem: "c",
                validacao: true,
                texto: "Sandals",
                imagem: {
                    src: "custom/img/opt10.png",
                    title: "Drag in drop",
                    alt:"Illustration of a pair of sandals.",
                },
                relacionarCom: { 
                    texto: "Shoe store",
                    imagem: {
                        src: "custom/img/img3.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of shoes displayed on shelves.",
                        
                    },
                }
            },
   
           
            
       
          
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Nice work! You did it!", 
                },
            negativo: {
                    texto: "Unfortunately, one or more items are incorrect.."
                }
            
        }
    },
    { 

        titulo: "Types of stores",
        pergunta: {
            texto: "Match the products with the correspondent stores."        
        },
        respostas: [
            {
                ordem: "a",
                validacao: true,
                texto: "Earphones",
                imagem: {
                    src: "custom/img/opt19.png",
                    title: "Drag in drop",
                    alt:"Ilustration of a pair of wireless earphones.",
                },
                relacionarCom: { 
                    texto: "Electronics store",
                    imagem: {
                        src: "custom/img/img6.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of an electronics store.",
                        
                    },
                }
            },
           
           
            {
                ordem: "b",
                validacao: true,
                texto: "Pants",
                imagem: {
                    src: "custom/img/opt13.png",
                    title: "Drag in drop",
                    alt:"Illustration of a pair of jeans pants.",
                },
                relacionarCom: { 
                    texto: "Clothing store",
                    imagem: {
                        src: "custom/img/img4.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a store with different kinds of clothes on hangs.",
                        
                    },
                }
            },
           
            {
                ordem: "c",
                validacao: true,
                texto: "Books",
                imagem: {
                    src: "custom/img/opt16.png",
                    title: "Drag in drop",
                    alt:"Illustration of a pile of books.",
                },
                relacionarCom: { 
                    texto: "Bookstore",
                    imagem: {
                        src: "custom/img/img5.jpg",
                        title: "Drag in drop",
                        alt:"Illustration of a postcard.",
                        
                    },
                }
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
]