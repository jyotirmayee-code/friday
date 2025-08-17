import { test, expect } from '@playwright/test';


test("Demo api test",async({request})=>{

const response=await request.get("https://api.restful-api.dev/objects");
console.log(response.status());
await expect(response.status()).toBe(200);

const responseBody=await response.json();
//console.log(responseBody);
//console.log(responseBody[0].name);

for(let i=0;i<responseBody.length;i++){
    const response=responseBody[i];
    if(response.id=='3'){
        console.log(response.name);
        console.log(response.data.color);
    }
}

});
