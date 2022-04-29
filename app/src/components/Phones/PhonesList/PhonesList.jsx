import { motion } from 'framer-motion'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setPhonesQuery } from '../../../redux/actionCreators/phonesAC'
import PhonesItem from '../PhonesItem/PhonesItem'

const phonesListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

const PhonesList = () => {
  const phones = useSelector((store) => store.phones)
  const filter = useSelector((store) => store.filter)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log({ filter })
    dispatch(setPhonesQuery(filter))
  }, [filter])

  return (
    <div className="d-flex justify-content-center">
      {
          phones.length ? (
            <motion.div variants={phonesListVariants} initial="start" animate="end" className="list-group">

              {phones.map((phone) => (
                <PhonesItem key={phone.id} {...phone} />
              ))}

            </motion.div>
          ) : null
      }

    </div>
  )
}

export default PhonesList
