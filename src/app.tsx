import { useState } from 'react'
import { v4 } from 'uuid'

// Components
import { Main, Sidebar, Content } from 'components/layout'

// Types & Props
import { FileProps } from 'resources/types'

const App = () => {
  const [files, setFiles] = useState<FileProps[]>([])

  const handleCreateNewFile = () => {
    setFiles((files) =>
      files
        .map((file) => ({
          ...file,
          active: false,
        }))
        .concat({
          id: v4(),
          name: 'Sem título',
          content: '',
          active: true,
          status: 'saved',
        }),
    )
  }

  return (
    <Main>
      <Sidebar files={files} onNewFile={handleCreateNewFile} />
      <Content />
    </Main>
  )
}

export { App }
