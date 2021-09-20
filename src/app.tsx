import { useState, useRef, MouseEvent, ChangeEvent } from 'react'
import { v4 } from 'uuid'

// Components
import { Main, Sidebar, Content } from 'components/layout'

// Types & Props
import { FileProps } from 'resources/types'

const App = () => {
  const [files, setFiles] = useState<FileProps[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCreateNewFile = () => {
    inputRef.current?.focus()

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

    inputRef.current?.focus()

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

  const handleChangeFilename =
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value

      setFiles((files) =>
        files.map((file) => {
          if (file.id === id) {
            return {
              ...file,
              name: inputValue,
              status: 'editing',
            }
          }

          return file
        }),
      )
    }

  const handleChangeContent =
    (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
      const textAreaValue = e.target.value

      setFiles((files) =>
        files.map((file) => {
          if (file.id === id) {
            return {
              ...file,
              content: textAreaValue,
              status: 'editing',
            }
          }

          return file
        }),
      )
    }

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={handleCreateNewFile}
        onSelectFile={handleSelectFile}
        onDeleteFile={handleDeleteFile}
      />
      <Content
        file={files.find((file) => file.active === true)}
        inputRef={inputRef}
        onChangeFilename={handleChangeFilename}
        onChangeFileContent={handleChangeContent}
      />
    </Main>
  )
}

export { App }
