import { InterfaceItem } from '@components/Item/InterfaceShopCategory'
import BreadCrums from '@components/breadcrums/BreadCrums'
import DescriptionBox from '@components/descriptionBox/DescriptionBox'
import ProductDisplay from '@components/productDisplay/ProductDisplay'
import RelatedProducts from '@components/relatedProducts/RelatedProducts'
import { ShopContext } from '@context/ShopContext'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e: InterfaceItem) => e.id === Number(productId))

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
