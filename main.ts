// assignment 16

let guestlist:string[] = ["Ambreen", "Bilquis", "Sakina"];

console.log("Great News! we found a bigger table");

// unshift
guestlist.unshift("Abid");

// splice
guestlist.splice(Math.floor(guestlist.length/2),0, "Anny");

//push
guestlist.push("Abbas");

console.log(guestlist);

//for each
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});