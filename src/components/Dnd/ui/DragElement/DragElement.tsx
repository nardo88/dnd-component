import { FC } from 'react'
import { IDragElementProps } from '../../types'

export const DragElement: FC<IDragElementProps> = ({ children }) => {
  return <div>{children}</div>
}
