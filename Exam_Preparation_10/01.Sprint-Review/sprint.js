// function solve(input) {

//     const n = Number(input.shift());
//     const elements = input.slice(0, n);
//     const commands = input.slice(n);

//     const board = elements.reduce((acc, curr) => {
//         const [assignee, taskId, title, status, estimatedPoints] = curr.split(":")

//         if (!acc.hasOwnProperty(assignee)) {
//             acc[assignee] = [];
//         }

//         acc[assignee].push({ taskId, title, status, estimatedPoints: Number(estimatedPoints) });

//         return acc;

//     }, {});

//     const commandRunner = {
//         "Add New": addNewTask,
//         "Change Status": changeTaskStatus,
//         "Remove Task": removeTask
//     };

//     commands.forEach(command => {
//         const [commandName, ...rest] = command.split(":");
//         commandRunner[commandName](...rest);
//     });


//     const todoPoints = calculateTotalForStatus("ToDo");
//     const inProgressPoints = calculateTotalForStatus("In Progress");
//     const reviewPoints = calculateTotalForStatus("Code Review");
//     const donePoints = calculateTotalForStatus("Done");

//     console.log(`ToDo: ${todoPoints}pts`);
//     console.log(`In Progress: ${inProgressPoints}pts`);
//     console.log(`Code Review: ${reviewPoints}pts`);
//     console.log(`Done Points: ${donePoints}pts`);


//     if (donePoints >= todoPoints + inProgressPoints + reviewPoints) {
//          console.log("Sprint was successful!");
         
//     } else {
//         console.log("Sprint was unsuccessful...");
//     }



//     function addNewTask(assignee, taskId, title, status, estimatedPoints) {

//         if (!board.hasOwnProperty(assignee)) {
//             console.log(`Assignee ${assignee} does not exist on the board!`);
//             return;
//         }

//         board[assignee].push({ taskId, title, status, estimatedPoints: Number(estimatedPoints) })
//     }


//     function changeTaskStatus(assignee, taskId, status) {

//         if (!board.hasOwnProperty(assignee)) {
//             console.log(`Assignee ${assignee} does not exist on the board!`);
//             return;
//         }

//         const task = board[assignee].find(t => t.taskId === taskId)

//         if (!task) {
//             console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
//             return;
//         }

//         task.status = status;
//     }

//     function removeTask(assignee, index) {

//         if (!board.hasOwnProperty(assignee)) {
//             console.log(`Assignee ${assignee} does not exist on the board!`);
//             return;
//         }

//         if (index < 0 || index >= board[assignee].length) {
//             console.log("Index is out of range!");
//             return;
//         }

//         board[assignee].splice(index, 1);
//     }


//     function calculateTotalForStatus(status) {
//         return Object.values(board).reduce((acc, curr) => {
//             const boardTotal = curr
//                 .filter((t) => t.status === status)
//                 .reduce((tasksTotal, task) => tasksTotal + task.estimatedPoints, 0);

//             return acc + boardTotal;
//         }, 0);
//     }
// }



function solve(input) {

    const n = Number(input.shift());
    const board = {};


    for (let i = 0; i < n; i++) {
        const line = input.shift().split(":");

        const assignee = line[0];
        const taskId = line[1];
        const title = line[2];
        const status = line[3];
        const points = Number(line[4]);

        if (!board[assignee]) {
            board[assignee] = [];
        }

        board[assignee].push({taskId, title, status, points});

    }

    let commandLine = input.shift();

    while (commandLine) {

        const tokens = commandLine.split(":");
        const command = tokens.shift();

        switch (command) {

            case "Add New":
                const assigneeAdd = tokens[0];
                const taskIdAdd = tokens[1];
                const titleAdd = tokens[2];
                const statusAdd = tokens[3];
                const pointsAdd = Number(tokens[4]);

                if (!board[assigneeAdd]) {
                    console.log(`Assignee ${assigneeAdd} does not exist on the board!`);

                } else {
                    board[assigneeAdd].push({
                        taskId: taskIdAdd,
                        title: titleAdd,
                        status: statusAdd,
                        points: pointsAdd
                    });
                }
                break;

            case "Change Status":
                const assigneeChange = tokens[0];
                const taskIdChange = tokens[1];
                const newStatus = tokens[2];

                if (!board[assigneeChange]) {
                    console.log(`Assignee ${assigneeChange} does not exist on the board!`);

                } else {
                    const task = board[assigneeChange].find(t => t.taskId === taskIdChange);

                    if (!task) {
                        console.log(`Task with ID ${taskIdChange} does not exist for ${assigneeChange}!`);

                    } else {
                        task.status = newStatus;
                    }
                }
                break;

            case "Remove Task":
                const assigneeRemove = tokens[0];
                const index = Number(tokens[1]);

                if (!board[assigneeRemove]) {
                    console.log(`Assignee ${assigneeRemove} does not exist on the board!`);

                } else if (index < 0 || index >= board[assigneeRemove].length) {
                    console.log(`Index is out of range!`);

                } else {
                    board[assigneeRemove].splice(index, 1);
                }
                break;
        }

        commandLine = input.shift();
    }


    let todo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;

    for (let assignee in board) {
        for (let task of board[assignee]) {

            switch (task.status) {

                case "ToDo":
                    todo += task.points;
                    break;

                case "In Progress":
                    inProgress += task.points;
                    break;

                case "Code Review":
                    codeReview += task.points;
                    break;

                case "Done":
                    done += task.points;
                    break;
            }
        }
    }

    console.log(`ToDo: ${todo}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

    if (done >= (todo + inProgress + codeReview)) {
        console.log("Sprint was successful!");

    } else {
        console.log("Sprint was unsuccessful...");
    }
}


// solve([
//     '5',
//     'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//     'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//     'Peter:BOP-1211:POC:Code Review:5',
//     'Georgi:BOP-1212:Investigation Task:Done:2',
//     'Mariya:BOP-1213:New Account Page:In Progress:13',
//     'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//     'Change Status:Peter:BOP-1290:ToDo',
//     'Remove Task:Mariya:1',
//     'Remove Task:Joro:1',
// ]);


solve([
'4',
'Kiril:BOP-1213:Fix Typo:Done:1',
'Peter:BOP-1214:New Products Page:In Progress:2',
'Mariya:BOP-1215:Setup Routing:ToDo:8',
'Georgi:BOP-1216:Add Business Card:Code Review:3',
'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
'Change Status:Georgi:BOP-1216:Done',
'Change Status:Will:BOP-1212:In Progress',
'Remove Task:Georgi:3',
'Change Status:Mariya:BOP-1215:Done',
]);