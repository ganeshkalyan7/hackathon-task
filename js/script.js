document.body.innerHTML=`
<div id="deal" class="container">
   <h1>book show  <i class="bi bi-book"></i> </h1> 
 </div> 

 <div id="input" class="container">
 <input type="text" class="form-control" id="input" aria-describedby="emailHelp"  placeholder="enter author name to get details"/>
 <br> <br>
   <button id="enter" class="btn btn-primary">enter</button>
</div>
<div class ="Container"><h1>CHARACTERS</h1>
  <div id="char"> </div>

</div>
   <hr/>

   <h1>BOOK DETAILS</h1>

   <div id="main">  </div>
  
        
 
   `
   


         //fetching the data//
  let url="https://www.anapioficeandfire.com/api/books"
        var value=async ()=>{
            try{
                let request=await fetch(url);
                let response=await request.json();
                main.innerHTML=" "
                response.forEach((num,index)=>{
                   console.log(num)
                    gettingdata(num)
                })
                

            }
            catch(err){
                console.log(err)

            }


        }
        value()

        function gettingdata(res){
            main.innerHTML+=`
            <div class ="Container-fluid" id="get"> 
            <h2 id="commom"> <b> NAME OF THE BOOK </b> -::- ${res.name}</h2>
            <h2 id="commom"> <b> AUTHOUR NAME </b>  -::- ${res.authors}</h2>
            <h2 id="commom"> <b>ISBN</b> -::- ${res.isbn}</h2> 
            <h2 id="commom"> <b>NUMBER OF PAGES</b> -::- ${res.numberOfPages}</h2> 
            <h2 id="commom"> <b>PUBLISHER NAME </b> -::- ${res.publisher}</h2> 
            <h2 id="commom"> <b> RELEASED DATE</b>  -::- ${res.released}</h2> 
            <a href="${res.povCharacters[0]}" class="btn btn-info"  onclick='myFunction(${res.povCharacters})' role="button">CHARECTERS OF THE BOOK</a>
            </div>
             
            `

        }


function myFunction(val){
    console.log(val)

}


         //search funtinality//
let inputsearch =document.getElementById("input");
inputsearch.addEventListener("input",(val)=>{
    const value=val.target.value;
    console.log(value)
})



         


             //charcter funtioanlity//
             let userCard=document.querySelector("[data-users-template]");


             let characters=async()=>{
                 try{

                     let res= await  fetch("https://www.anapioficeandfire.com/api/characters");
                     let request=await res.json()
                       char.innerHTML=" "

                        request.forEach((users)=>{
                            console.log(users)
                            gettinCharacter(users)
                          
                            })
                        
                }
                 catch(err){

                    console.log(err)
                 }



             }
             characters()



function gettinCharacter(eme){
    char.innerHTML+=`
  
    <div class ="Container" id="character"> 
    <h1> <b>ALIASES</b>--::--${eme.aliases}</h1>
    <h2> <b> gender </b>--::--${eme.gender}</h2>
    <h2> <b> culture </b>--::-- ${eme.culture}</h2>
    </div>
    
    `

    



    

}






    
