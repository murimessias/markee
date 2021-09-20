import { useState, useRef, useEffect, MouseEvent, ChangeEvent } from 'react'
import { v4 } from 'uuid'
import localforage from 'localforage'

// Types
import { FileProps } from 'resources/types'

export const useFiles = () => {
  const [files, setFiles] = useState<FileProps[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const changeStatus = () => {
      const currentFile = files.find((file) => file.active === true)

      if (!currentFile || currentFile.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles((files) =>
          files.map((file) => {
            if (file.active) {
              return {
                ...file,
                status: 'saving',
              }
            }

            return file
          }),
        )

        setTimeout(() => {
          setFiles((files) =>
            files.map((file) => {
              if (file.active) {
                return {
                  ...file,
                  status: 'saved',
                }
              }

              return file
            }),
          )
        }, 300)
      }, 300)
    }

    changeStatus()

    return () => clearTimeout(timer)
  }, [files])

  useEffect(() => {
    localforage.setItem('files', files)
  }, [files])

  useEffect(() => {
    const getLocalStorage = async () => {
      const files = await localforage.getItem<FileProps[]>('files')

      if (!files) {
        handleCreateNewFile()
        return
      }

      setFiles(files)
    }

    getLocalStorage()
  }, [])

  useEffect(() => {
    const currentFile = files.find((file) => file.active === true)

    if (currentFile) {
      window.history.replaceState(null, '', `/file/${currentFile.id}`)
    }
  }, [files])

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

  return {
    files,
    handleChangeContent,
    handleChangeFilename,
    handleCreateNewFile,
    handleDeleteFile,
    handleSelectFile,
    inputRef,
  }
}
