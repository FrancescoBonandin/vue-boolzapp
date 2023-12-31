const {createApp}=Vue;





createApp({
    data(){
        return{

          
            specificDataId:null,
            filteredContacts:[],
            search:"",
            newMessage:"",
            counter:0,
            activeCounter:0,
            user:{
                firstName:"Francesco",
                lastName:"Bonandin",
                avatar:'./img/avatar_2.jpg',
            },
            contacts: [
                {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
                ],
                },
                {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
                }
                ],
                },
                {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
                }
                ],
                }
            ]    

        }
    },
    methods:{

        getMyDate(){
             
            let today = new Date();
            let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
            // let seconds = (today.getSeconds()<=9)? "0"+today.getSeconds().toString() : today.getSeconds().toString();
            // console.log(seconds);
            let minutes = (today.getMinutes()<=9)? "0"+today.getMinutes().toString() : today.getMinutes().toString();
            // console.log(minutes);
            let hours = (today.getHours()<=9)? "0"+today.getHours().toString() : today.getHours().toString();
            // console.log(hours);
            let time = `${hours}:${minutes}` 
            // `:${seconds}`;
            // console.log(time);
            let dateTime = date+' '+time;
            return dateTime ;
        },

        getResponse(){

            
            axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
            .then( (res) => {

                const result = res.data.response;
                
                 
                setTimeout(() => { this.contacts[this.counter].messages.push({
                    date:this.getMyDate(),
                    message:result,
                    status:"received"})
                    
                    
                }, 1000)
            })
      

     
        },
        

        sendNewMessage(){

            this.contacts[this.counter].messages.push({
                date:this.getMyDate(),
                message:this.newMessage,
                status:"sent"
            
            })

            this.newMessage="";
            
            this.getResponse()
      
        },

        searchInContacts(){

            if(this.search==''){
                this.filteredContacts=[]
            }

            else{
                
                this.filteredContacts=this.contacts.filter(singleContact =>{
                  
                    if( singleContact.name.toUpperCase().includes(this.search.toUpperCase())){
                    return true
                    }
    
                    else{
                    return false
                    }
                        
                });
                
            }

            console.log(this.filteredContacts.length)
            
        },
        activateChat(index){
        //     se la ricerca è vuota cerco in Array;
        //     contatore gli assegno il valore di index e poi a contatore attivo assegno il valore di contatore;
            if(this.search==''){
                this.counter=index
                this.activeCounter=this.counter
            }
        //     oppure se ricerca non è vuota e se arrayfiltrato è piu lungo di 0 cerco in arrayfiltrato;
        //     prendo l elemento arrayfiltrato[index] e controllo in che posizione è
        //      dentro array prendo il suo indice e lo assegno a contatore attivo;
            else if(this.search!='' && this.filteredContacts.length > 0){
                this.activeCounter=this.contacts.indexOf(this.filteredContacts[index])
                
                // findIndex((element)=>{
                    // element == this.filteredContacts[index]
                    console.log(this.activeCounter)
                // }
                // )
            }
        //     se array filtrato è vuoto non faccio niente 
        },

        deleteMessage(i){
            if(this.contacts[this.activeCounter].messages.length>0){

                this.contacts[this.activeCounter].messages.splice(i,1)

            }
            else{
                this.contacts[this.activeCounter].messages =[]
            }

        },
        
        getDataId(dataId){
            this.specificDataId = dataId;
        
        }

       
        
    }

}).mount("#app")
