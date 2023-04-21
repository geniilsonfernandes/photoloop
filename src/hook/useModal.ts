import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }

  function close() {
    setIsShowing(false)
  }

  function open() {
    setIsShowing(true)
  }
  return {
    isShowing,
    toggle,
    close,
    open,
  }
}

export default useModal
