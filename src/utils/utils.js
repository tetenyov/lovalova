export function validateEditProfile(inputData) {

  return Object.values(inputData).every(input => input.length !== 0)
}

export function isChecked(checked, name) {
  return checked.includes(name)
}
