export function createMessenger() {
    let sender = 'Gromcode';
    let message = 'Just learn it!';

    function sendMessage(name) {
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(sender2) {
        sender = sender2;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
}