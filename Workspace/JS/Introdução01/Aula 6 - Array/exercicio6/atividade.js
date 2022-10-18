var atividade = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995,]

console.log(atividade);
console.log(atividade.length)
console.log(atividade[6]);
console.log(typeof atividade)

var atividade2 = atividade.toString();
console.log(typeof atividade2)

var y = atividade.join(" + ")
console.log(atividade)
console.log(y)

var u = atividade.push('IOS')
console.log(atividade);
console.log(u);


var atividade2 = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995,]
console.log(atividade2)

var atividade2 = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "Js", 1995],
    ["React", 2013, "Java", 1995]
]

console.log(atividade2);
console.log(atividade2[2][1]);
atividade2[1][2] = "Javascript";
delete atividade2[2][2]

var u = atividade2[2].push('pipoca')
console.log(atividade2);
console.log(u);