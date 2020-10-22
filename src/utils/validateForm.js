export function validateEditProfile(inputData) {
  
  return Object.values(inputData).every(input => input.length !== 0)
}
