let todoList = [ 
    {item:'TO Study Well',
       duedate:'15/10/2025'
    },
    {item:'Do Not Spoil Ur Time',
       duedate:'15/10/2024'
    },
    {item:'Alway Try To Engage',
     duedate:'15/10/2025'
    }
   
];
displayItem();

function addTodo()
 {
    
   let inputElement = document.querySelector 
   ('#todo-input');
   let dateElement = document.querySelector 
   ('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
   todoList.push({item: todoItem, duedate: tododate});
   inputElement.value = '';
   dateElement.value = '';


   displayItem();
}
function displayItem() 
{
    let containerElement = document.querySelector 
    ('.todo-container');

     let newHtml = '';

    for(let i = 0; i < todoList.length; i++)
    { 
      // let todoItem = todoList[i].item;
      // let dueDate = todoList[i].dueDate;
        let{item,duedate} = todoList[i];
        newHtml+=`
             
             <span>${item}</span>
             <span>${duedate}</span>
             <button  class='btn-delete' onclick="todoList.splice(${i},1);displayItem();">Delete</button>
             
        `;
           
   }
   containerElement.innerHTML = newHtml;

}

