export const generateID = () => {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let id = randLetter + Date.now();
    return id;
};
