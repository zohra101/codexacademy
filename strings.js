<script>
/**************************
to provide info about a BootStrap component, a basic card with an image\
**************************/   

const card {};
card.src = "img link";
card. title = "Spaghetti";
card.summary =  "Spaghetti sentence";

const cardString = convertCard(card);

function convertCard(cardObject) {
card details;
}

const cards = [card1, card2, card3];
for (position = 0; position < cards.length; position++ ) {
        const card = cards [position];
        const cardString = convertCard(card);
        mainTag.innerHTML = mainTag.innerHTML + cardString;
}

  
/**************************    
no idea what this is called
**************************/     
                                        
const myGreeting =  "Hello," + Rolazar + " ! How are you?"

const userName= "Rolazar";
const myGreeting = "Hello," + userName + " ! How are you?";   
                                           
                                           
/**************************
TEMPLATE STRING
**************************/
                                           
//1. Start with a string.
const myString = "Hello, Alex! How are you?";
                                           

//2. Replace the quotes with backticks.
const myString = `Hello, Alex! How are you?`;


//3. String the text thst will be a variable.
const myGreeting = `Hello, ${Alex} ! How are you?`;
                                           
//4. Insert the variable. 
const myGreeting = `Hello, ${userName}! How areyou?`;
                                        
//5. Set a value for the variable.
const userName = 'Alex';                                   
const myGreeting = `Hello, ${userName}! How areyou?`;                                      


/**************************
Use a template string to convert a Bootstrap card
**************************/

<div class="card">
  <img class="card-img-top" src="spaghetti.jpg">
    <div class="card-body">
      <h3 class="card-title">Fish Tacos</h3>
      Delicious and perfectly seasoned.
    </div>
</div>

//first, surround the elements with 1 set of backticks
`<div class="card">
    <img class="card-img-top" src="spaghetti.jpg">
      <div class="card-body">
        <h3 class="card-title">Fish Tacos</h3>
        Delicious and perfectly seasoned.
      </div>
</div>`

//next, separate the parts that should be variables
`<div class="card">
    <img class="card-img-top" src="${card.src}">
      <div class="card-body">
        <h3 class="card-title">${card.title}</h3>
        ${card.summary}
      </div>
</div>`

//then set the properties for the object
const card ={};
card.src =  "";
card.title = "";
card.summary = "";
