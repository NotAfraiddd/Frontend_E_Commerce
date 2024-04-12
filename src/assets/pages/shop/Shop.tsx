import { Hero } from '@components/hero/Hero'
import { NewCollections } from '@components/newCollection/NewCollections'
import { NewLetter } from '@components/newLetter/NewLetter'
import { Offer } from '@components/offer/Offer'
import { Popular } from '@components/popular/Popular'

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewLetter />
    </div>
  )
}
