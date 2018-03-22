function validateRequest(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (!(obj.method && validMethods.includes(obj.method))) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let uriRegex = /^[\w.]+$/;
    if (!(obj.uri && (uriRegex.test(obj.uri) || obj.uri === '*'))) {
        throw new Error("Invalid request header: Invalid URI");

    }

    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!(obj.version && versions.includes(obj.version))) {
        throw new Error("Invalid request header: Invalid Version");
    }

    let messageRegex = /^[^<>\\&'"]*$/;

    if (!( obj.hasOwnProperty("message") && (messageRegex.test(obj.message) || obj.message === ""))) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}

console.log(
    validateRequest(
        {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        }));
console.log(validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));
console.log(validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));


