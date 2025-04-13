// function addTask() {
//     // Step 1:  find Input value
//     let inputBox = document.getElementById("input-box");
//     let task = inputBox.value;
//     let tasks=document.getElementById("task-list")
    

//     // Step 2: if empty give alert
//     if (task === "") {
//         alert("Please enter a task!");
//     }
//     else{

//     // Step 3: make new element 
//     let taskDiv = document.createElement("div");
//     taskDiv.innerHTML = `<button class="complete-btn">✔</button>${task}<button class="delete-btn">✖</button>`;
//     taskDiv.classList.add("task-item"); // styling ke liye

//     // Step 4: Jaha dikhana hai waha chipka do
//     tasks.appendChild(taskDiv);

//     // Step 5: Get the complete and delete buttons from the taskDiv
//     let completeBtn = taskDiv.querySelector('.complete-btn');
//     let deleteBtn = taskDiv.querySelector('.delete-btn');

//     // Complete Button Logic
//     completeBtn.addEventListener('click', function() {
//     taskDiv.classList.toggle('completed'); // Toggle line-through
//     });

//     // Delete Button Logic
//     deleteBtn.addEventListener('click', function() {
//     taskDiv.remove(); // Task hatao
//     });

//     }

//     // Step 6: clear Input box
//     inputBox.value = "";
// }





function addTask() {
    // Step 1:  find Input value
    let inputBox = document.getElementById("input-box");
    let task = inputBox.value
    let tasks = document.getElementById("task-list");

    // Step 2: if empty give alert
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Step 3: Check if task already exists
    let allTasks = document.querySelectorAll(".task-item");
    let isDuplicate = false;

    allTasks.forEach(t => {
        if (t.textContent.toLowerCase().includes(task.toLowerCase())) {
            isDuplicate = true;
        }
    });

    if (isDuplicate) {
        alert("This task already exists!");
        inputBox.value = ""; // Clear input box
        return;
    }

    // Step 4: make new element 
    let taskDiv = document.createElement("div");
    taskDiv.innerHTML = `<button class="complete-btn">✔</button>${task}<button class="delete-btn">✖</button>`;
    taskDiv.classList.add("task-item"); // styling ke liye

    // Step 5: Jaha dikhana hai waha chipka do
    tasks.appendChild(taskDiv);

    // Step 6: Get the complete and delete buttons from the taskDiv
    let completeBtn = taskDiv.querySelector('.complete-btn');
    let deleteBtn = taskDiv.querySelector('.delete-btn');

    // Complete Button Logic
    completeBtn.addEventListener('click', function () {
        taskDiv.classList.toggle('completed'); // Toggle line-through
    });

    // Delete Button Logic
    deleteBtn.addEventListener('click', function () {
        taskDiv.remove(); // Task hatao
    });

    // Step 7: clear Input box
    inputBox.value = "";
}







// function addTask() {
//     let inputBox = document.getElementById("input-box");
//     let task = inputBox.value.trim();
//     let tasks = document.getElementById("task-list");

//     if (task === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     let allTasks = document.querySelectorAll(".task-item");
//     let isDuplicate = false;

//     allTasks.forEach(t => {
//         if (t.querySelector('.task-text').textContent.toLowerCase() === task.toLowerCase()) {
//             isDuplicate = true;
//         }
//     });

//     if (isDuplicate) {
//         alert("This task already exists!");
//         inputBox.value = "";
//         return;
//     }

//     // Step 4: Create task div
//     let taskDiv = document.createElement("div");
//     taskDiv.innerHTML = `<button class="complete-btn">✔</button><span class="task-text">${task}</span><button class="delete-btn">✖</button>`;
//     taskDiv.classList.add("task-item");

//     // 👇👇 Store original index in data-attribute
//     taskDiv.setAttribute("data-index", tasks.children.length);

//     tasks.appendChild(taskDiv);

//     let completeBtn = taskDiv.querySelector('.complete-btn');
//     let deleteBtn = taskDiv.querySelector('.delete-btn');

//     // ✔ Button logic — move to last or back to original
//     completeBtn.addEventListener('click', function () {
//         if (!taskDiv.classList.contains("completed")) {
//             taskDiv.classList.add("completed");

//             // ✅ Move to end
//             tasks.removeChild(taskDiv);
//             tasks.appendChild(taskDiv);

//         } else {
//             taskDiv.classList.remove("completed");

//             // 🔁 Move back to original position
//             let index = parseInt(taskDiv.getAttribute("data-index"));
//             tasks.removeChild(taskDiv);

//             // 😎 Insert back at original position
//             if (index >= tasks.children.length) {
//                 tasks.appendChild(taskDiv);
//             } else {
//                 tasks.insertBefore(taskDiv, tasks.children[index]);
//             }
//         }
//     });

//     // ✖ Delete
//     deleteBtn.addEventListener('click', function () {
//         taskDiv.remove();
//     });

//     inputBox.value = "";
// }




