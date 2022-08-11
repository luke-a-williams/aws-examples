var messages = [
    "Hello World!",
    "Greetings Serverless!",
    "Salutations ol' chap"
    
];

exports.handler = async (event) => {
    let message = messages[Math.floor(Math.random()*3)]
    // TODO implement - usable in Lambda functions on Node 16
    const response = {
        statusCode: 200,
        body: JSON.stringify(message),
    };
    return response;
};