import { FC, ReactNode } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { Container } from '../Container/Container'
import { DragElement } from '../DragElement/DragElement'
import cls from './Main.module.scss'
import { IContainerProps, IDragElementProps } from '../../types'

interface IMainProps {
  children: ReactNode
}

type MainType = FC<IMainProps> & {
  Container: FC<IContainerProps>
  DragElement: FC<IDragElementProps>
}

export const Main: MainType = ({ children }) => {
  return <div className={classNames(cls.main)}>{children}</div>
}

Main.Container = Container
Main.DragElement = DragElement
