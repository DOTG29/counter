let tab = [1,10,13,5,89]
let tab2 = [1,10,3,2,9,13 ]
let result = []


function common(a,b){
    for(let i = 0; i < a.length;i++){
        if(b.includes( a[i])){
            result.push(a[i])
        }
    }
    return result
}

console.log(common(tab,tab2));