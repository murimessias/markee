import { StatusProps } from '.'

export type FileProps = {
  id: string
  name: string
  content: string
  active: boolean
  status: StatusProps
}
