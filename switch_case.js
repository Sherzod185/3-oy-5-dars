let a=20
let b=30
let c="+"
let d="-"
let e="/"
let f="*"

switch(f){
  case c:
    console.log(`${a} + ${b} = ${a+b}`);
    break
    case d:
      console.log(`${a} - ${b} = ${a-b}`);
      break
      case e:
        console.log(`${a} / ${b} = ${a/b}`);
        break
        case f:
          console.log(`${a} * ${b} = ${a*b}`);
          break
          default:
            console.log("Amallar notog'ri qollangan");
}