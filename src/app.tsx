import { useState, MouseEvent } from 'react'
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

  const handleSelectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()

    setFiles((files) =>
      files.map((file) => ({
        ...file,
        active: file.id === id,
      })),
    )
  }

  const handleDeleteFile = (id: string) => {
    setFiles((files) => files.filter((file) => file.id !== id))
  }

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={handleCreateNewFile}
        onSelectFile={handleSelectFile}
        onDeleteFile={handleDeleteFile}
      />
      <Content />
    </Main>
  )
}

export { App }
