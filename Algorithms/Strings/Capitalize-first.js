const firstName = "mary";

function capitalizeName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

console.log(capitalizeName(firstName));