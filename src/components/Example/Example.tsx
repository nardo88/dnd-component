import { useState } from 'react'
import { Dnd } from '../Dnd'
import { available } from '../../helpers/data'
import { SimpleItem } from '../SimpleItem/SimpleItem'
import cls from './Example.module.scss'

interface IData {
  _id: number
  title: string
  description: string
}

export const Example = () => {
  const [data, setData] = useState<IData[]>(available)

  return (
    <div>
      <Dnd.Container className={cls.container}>
        {data.map((item, index) => (
          <Dnd.DragElement<IData>
            key={item._id}
            keyField="_id"
            index={index}
            data={data}
            setData={setData}>
            <SimpleItem description={item.description} title={item.title} />
          </Dnd.DragElement>
        ))}
      </Dnd.Container>
    </div>
  )
}
