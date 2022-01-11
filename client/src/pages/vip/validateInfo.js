export default function validateInfo(values) {
  let errors = {}

  // if (!values.username.trim()) {
  //   errors.username = 'Username required'
  // }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  // if (!values.email) {
  //   errors.email = 'Email required'
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = 'Email address is invalid'
  // }
  // if (!values.phone) {
  //   errors.phone = 'Phone required'
  // }
  //  else if (!/\S+@\S+\.\S+/.test(values.phone)) {
  //   errors.phone = 'Phone address is invalid'
  // }
  if (!values.address) {
    errors.address = 'Address is required'
  }
  // else if (values.address.length < 6) {
  //   errors.address = 'address needs to be 6 characters or more'
  // }

  if (!values.city) {
    errors.city = 'City is required'
  }
  if (!values.province) {
    errors.province = 'Province is required'
  }
  // else if (values.city !== values.address) {
  //   errors.city = 'addresss do not match'
  // }
  return errors
}
