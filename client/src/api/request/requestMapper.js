import { petMapper } from '../pet/petMapper'

export function requestMapper(rawRequest) {
  return {
    id: rawRequest._id,
    name: rawRequest.name,
    email: rawRequest.email,
    phone_number: rawRequest.phone_number,
    location: rawRequest.location,
    message: rawRequest.message,
    pet: petMapper(rawRequest.pet)
  }
}
