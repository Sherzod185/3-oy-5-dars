const a=20
const b="*"
const c=2
const x= function(son1, amal, son2) { 
  if(amal=="+"){
    return `${son1} + ${son2}=${son1+son2}`
  }
  else if(amal=="-"){
    return `${son1} - ${son2}=${son1-son2}`
  }
  else if(amal=="*"){
    return `${son1} * ${son2}=${son1*son2}`
  }
  else if(amal=="/"){
    return `${son1} / ${son2}=${son1/son2}`
  }
  else{
    return `Amallar notog'ri qollangan`
  }

};
console.log(x(a,b,c));