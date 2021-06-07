function likes(names) {
  names = names || [];
  if (names.length > 3) {
    let size = 2;
    const name = names.slice(0, size);
    names.splice(0, 2);
    return `${name[0]}, ${name[1]} and ${names.length} others like this`;
  } else if (names.length >= 2 && names.length <= 3) {
    if (names.length == 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else {
    return "no one likes this";
  }
}
