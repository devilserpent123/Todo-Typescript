let submitB=document.querySelector("#SubmitButton");
let formData=document.querySelector("#horses");
let assigneeDrop=document.querySelector("#selectAssignee");
let Ptable=document.querySelector("#InProgress");
let Ctable=document.querySelector("#Completed");
let t1 = document.querySelector("#staskName") as HTMLInputElement;
let t2 = document.querySelector("#sassigneeName") as HTMLInputElement;
let t3 = document.querySelector("#sdueDate") as HTMLInputElement;

let assigneeName = ["Rahul","Vishwnath", "Rahul", 
                    "Prabhjot", "Hari", "Shibo",
                    "Sarthak","Rishab","Rakesh"];

let AssigneeDropDown = () => {
    for(let aname of assigneeName){
        let newOption = document.createElement("option");
        newOption.value = aname;
        newOption.innerHTML = aname;
        assigneeDrop!.appendChild(newOption);
    }
}
                
AssigneeDropDown(); 

let getForm: EventListener =(event) :  void => {
   
    let Counter='';
    
    
    event.preventDefault();
   
    let data=new FormData(formData as HTMLFormElement); 
    

    let TName=data.get("11");
    let AssName=data.get("12");
    let DateName= data.get("13");
    clearInputs();
  
    
  
        
        let Row=document.createElement("tr");
        let d1=document.createElement("td");
        let d2=document.createElement("td");
        let d3=document.createElement("td");
        let d4=document.createElement("td");
        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.addEventListener("click",(E)=>{
       
     
        let taskid = (E.target as Element).id; 
        let task = document.getElementById(taskid);
        let parent = task?.closest("tr");
    
        Ctable?.appendChild(parent as HTMLTableRowElement);
    
        })
        checkbox.id=Counter+'a';  //id can be set to change it
        
        d1.textContent=TName as string;
        d2.innerHTML=AssName as string;
        d3.innerHTML=(DateName! as string).split("-").reverse().join("-");
        d4.appendChild(checkbox);
        Row.append(d1);
        Row.append(d2);
        Row.append(d3);
        Row.append(d4);
        Ptable!.append(Row);
        
    
    
}
let clearInputs = () => {
    let temp = formData as HTMLFormElement;
    temp.reset();
}


submitB!.addEventListener("click",getForm);


