(function() {
    const socket = io('http://localhost:3000');

    const msgScreen = document.getElementById('messageScreen');
    const messageInput = document.getElementById('message');

    const printMessage = (message) => {
        let newMsg = document.createElement('p');
        newMsg.innerText = message;
        newMsg.classList.add('people');
        msgScreen.appendChild(newMsg);
    };

    const printOwnMessage = (message, name) => {
        let newMsg = document.createElement('p');
        newMsg.innerText = `${name}: ${message}`;
        newMsg.classList.add('own');
        msgScreen.appendChild(newMsg);
    };

    let name = prompt('What is your name?');
    
    if(name === null || name === '') {
        name = 'NO NAME';
    }
    // use this when it's on live server
    // socket.on('disconnect', () => {
    //     socket.emit('chat', `${name} is disconnected`);
    // });

    socket.on('connect', () => {
        socket.emit('chat', `${name} joined to Real Time Chat`);
        printMessage('Connected to Real Time Chat');
    });

    socket.on('message', message => printMessage(message));

    document.forms[0].onsubmit = function () {
        printOwnMessage(messageInput.value, name);
        socket.emit('chat', `${name}: ${messageInput.value}`);
        messageInput.value = '';
    };
})();



