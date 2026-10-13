let environment="staging";
let baseURL=environment==="production:"?"https://www.example.com":"https://staging.example.com";
console.log(baseURL);