let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let obj = {}

let arr=[]

for(let i=0; i<touristSpots.length; i++){
	let word = touristSpots[i].split(" ")
	let str=""
	for(let j=0; j<word.length; j++){
		let curr = word[j].toLowerCase()
		if(curr!=="a"&& curr!=="the"&& curr!=="an"){
			str+=word[j]+ " ";
		}
	}
	let strFinal = str.trim();
	obj[strFinal] = touristSpots[i];
    arr.push(obj[strFinal]);
}
console.log(arr.sort())


