import {
  createContext, useContext,
} from 'react'
import PhoneForm from './PhoneForm/PhoneForm'
import PhonesList from './PhonesList/PhonesList'
import SearchPhoneForm from './SearchPhoneForm/SearchPhoneForm'

const PhonesContext = createContext()

const Phones = () => (
  <>
    <PhoneForm />

    <hr className="mb-4" />
    <SearchPhoneForm />
    <PhonesList />
  </>

)

export default Phones

const usePhonesContext = () => useContext(PhonesContext)

export {
  PhonesContext,
  usePhonesContext,
}
