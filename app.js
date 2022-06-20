let pronoun = ['the', 'our'];//k=2
let adj = ['great', 'big'];//l=2
let noun = ['jogger','racoon'];//m=2
let ext =['.com','.net','.us','.io','.br','.pt','.es','.it']

for (var k = 0; k < 2; k++) {
    
    for (var l = 0; l < 2; l++) {
         
        for (var m = 0; m < 2; m++) {

            for (var w = 0; w < 8; w++)
            console.log(pronoun[k]+adj[l]+noun[m]+ext[w]);
}
}
}

