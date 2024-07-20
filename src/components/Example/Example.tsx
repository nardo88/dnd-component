import { useState } from 'react'
import { Dnd } from '../Dnd'
import { available } from '../../helpers/data'
import { SimpleItem } from '../SimpleItem/SimpleItem'
import cls from './Example.module.scss'

export const Example = () => {
  const [data, setData] = useState(available)

  return (
    <div>
      <Dnd.Container className={cls.container}>
        {data.map((item, index) => (
          <Dnd.DragElement key={item.id}>
            <SimpleItem description={item.description} title={item.title} />
          </Dnd.DragElement>
        ))}
      </Dnd.Container>
    </div>
  )
}
