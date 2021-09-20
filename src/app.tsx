import { useFiles } from 'resources/hooks/use-files'

// Components
import { Main, Sidebar, Content } from 'components/layout'

const App = () => {
  const {
    files,
    handleChangeContent,
    handleChangeFilename,
    handleCreateNewFile,
    handleDeleteFile,
    handleSelectFile,
    inputRef,
  } = useFiles()

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
