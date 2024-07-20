import cls from './SimpleItem.module.scss'
import image from '../../assets/boy.svg'
import { FC } from 'react'

interface SimpleItemProps {
  title: string
  description: string
}

export const SimpleItem: FC<SimpleItemProps> = ({ description, title }) => {
  return (
    <div className={cls.simpleItem}>
      <div className={cls.imageWrapper}>
        <img src={image} alt="" />
      </div>
      <div className={cls.rightSection}>
        <h2 className={cls.title}>{title}</h2>
        <p className={cls.description}>{description}</p>
      </div>
    </div>
  )
}
