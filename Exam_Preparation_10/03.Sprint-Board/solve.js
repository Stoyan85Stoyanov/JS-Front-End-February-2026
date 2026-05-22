const baseURL = "http://localhost:3030/jsonstore/tasks";

const sections = {
    "ToDo": document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    "Done": document.querySelector("#done-section .task-list")
};

document.querySelector("#load-board-btn").addEventListener("click", loadTasks);
document.querySelector("#create-task-btn").addEventListener("click", createTask);

async function loadTasks() {
    const res = await fetch(baseURL);
    const data = await res.json();

    Object.values(sections).forEach(s => s.innerHTML = "");

    Object.values(data).forEach(task => {
        const li = document.createElement("li");
        li.className = "task";

        const h3 = document.createElement("h3");
        h3.textContent = task.title;

        const p = document.createElement("p");
        p.textContent = task.description;

        const btn = document.createElement("button");
        btn.dataset.id = task._id;

        if (task.status === "ToDo") {
            btn.textContent = "Move to In Progress";

        } else if (task.status === "In Progress") {
            btn.textContent = "Move to Code Review";

        } else if (task.status === "Code Review") {
            btn.textContent = "Move to Done";

        } else if (task.status === "Done") {
            btn.textContent = "Close";
        }

        btn.addEventListener("click", handleTask);

        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(btn);

        sections[task.status].appendChild(li);
    });
}

async function createTask() {
    const title = document.querySelector("#title").value.trim();
    const description = document.querySelector("#description").value.trim();

    if (!title || !description) {
       return; 
    }

    await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            description,
            status: "ToDo"
        })
    });

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";

    loadTasks();
}

async function handleTask(e) {
    const id = e.currentTarget.dataset.id;

    const res = await fetch(baseURL);
    const data = await res.json();

    const task = Object.values(data).find(t => t._id === id);
    if (!task) return;

    if (task.status === "Done") {
        await fetch(`${baseURL}/${id}`, {
            method: "DELETE"
        });

    } else {
        let nextStatus = "";

        if (task.status === "ToDo") {
            nextStatus = "In Progress";

        } else if (task.status === "In Progress") {
            nextStatus = "Code Review";

        } else if (task.status === "Code Review") {
            nextStatus = "Done";
        }

        await fetch(`${baseURL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                status: nextStatus
            })
        });
    }

    loadTasks();
}