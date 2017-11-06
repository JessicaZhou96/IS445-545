let message, text, i;
message = ['message 01',
           'message 02',
           'message 03',
           'message 04',
           'message 05'
];

//choose an option
const option = prompt ('Choose an option:\n1: Show messages\n2: Add a messages\n3: Delete a message\n0: Quit');

//check the option
if (option == '1'){
    showMessage();
}
else if (option == '2'){
    addMessage();
}
else if (option == '3'){
    deleteMessage();
}
else if (option == '0'){
    quit();
}
else{
    error();
}


function showMessage() {
    printArray(message)
}

function addMessage() {
    const newMessage = prompt ('Enter a new message:');
    message.push(newMessage);
    printArray(message)
}

function deleteMessage(){
    let index;
    if (message.length <= 0) {
        document.getElementById("output").innerHTML = 'The message array is empty, please add message first.';
    } else {
        index = prompt ('Enter the message index (between 1 and ' + message.length + ') :');

        if (index < 1 || index > message.length) {
            document.getElementById("output").innerHTML = 'Input index is out of bound, please enter a valid index';
        } else {
            index -= 1;
            for (i = index; i < message.length - 1; i++) {
                swap(message, i, i + 1);
            }
            message.pop();
        }
        printArray(message)
    }
}

function printArray(message) {
    text = "<ol>";
    for (i = 0; i < message.length; i++) {
        text += "<li>" + message[i] + "</li>";
    }
    text += "</ol>";
    document.getElementById("output").innerHTML = 'The current message are:'+'<br>'+ text;
}

function swap(message, x, y) {
    let temp = message[x];
    message[x] = message[y];
    message[y] = temp;
}

function quit(){
    document.getElementById("output").innerHTML = 'Goodbye!';
}

function error(){
    document.getElementById("output").innerHTML = 'Please refresh ands select a correct command.';
}