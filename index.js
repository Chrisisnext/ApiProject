"use strict";


async function fetchObject(url, payload) { //this returns a javascript object
    const method = "GET" //Some service will want a POST 
    const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
    const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
    //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}


async function kraken(){

    let kraken = await fetchObject("https://api.kraken.com/0/public/Trades?pair=ltcusd")
    for (i=0; i<kraken.length; i++){

    }

}

kraken()

