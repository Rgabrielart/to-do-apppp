let taskinput = document.querySelector(".taskinput");
let taskbutton = document.querySelector(".taskbutton");
let mylist = document.querySelector(".mylist");

let taskArray = [];  // inputs the taskinput values


// add button
taskbutton.addEventListener("click", function(){
    taskArray.push(taskinput.value);
    adtodo();
});

// creating a function for repeating delet taskinput.values  
function adtodo(){
   mylist.innerHTML = "" ; 
    taskArray.map((item) => {  // item = taskinput.value
        mylist.innerHTML += `<li><div class ="texts_flex"><p>${item}</p></div><div class="buttons_flex"><button class ="edit">edit</button><button class ="delet">delet</button></div></li>`;  
      
        //creating the delet button workable 
        let remove = document.querySelectorAll(".delet");
        let removarr = Array.from(remove);  

        removarr.map((button, index) =>{   
            button.addEventListener("click", function(){
                taskArray.splice(index, 1); 
                adtodo() 
            });
        });

        //creating edit button
        let edit = document.querySelectorAll(".edit");
        let editrArr = Array.from(edit);

        editrArr.map((element, index) => {
            element.addEventListener("click",function(){
                adtodo();
                updateData(index)
            });
        });

        // update button
        function updateData(items){

            mylist.children[items].outerHTML = `<li><div class ="texts_flex"><input class="updateInput" type="text" placeholder="update"></div><div class="buttons_flex"><button class ="update">update</button><button class ="delet">delet</button></div></li>`;

            let update = document.querySelector(".update");
            let updateInput = document.querySelector(".updateInput");

            update.addEventListener("click", function(){
                  taskArray.splice(items, 1, updateInput.value)
                  adtodo()
            });

            let remove = document.querySelectorAll(".delet");
            let removarr = Array.from(remove);  
    
            removarr.map((button, index) =>{   
                button.addEventListener("click", function(){
                    taskArray.splice(index, 1); 
                    adtodo() 
                });
            });
        };  
   });
};