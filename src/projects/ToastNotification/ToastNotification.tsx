import { useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
}

const TOAST_CONFIG: Record<ToastType, { color: string; label: string }> = {
  success: { color: '#2ecc71', label: 'Success' },
  error: { color: '#e74c3c', label: 'Error' },
  info: { color: '#3498db', label: 'Info' }
}

const slideIn = keyframes`
  from { transform: translateX(120%); }
  to { transform: translateX(0); }
`

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 100;
`

const ToastItem = styled.div<{ $color: string }>`
  background-color: white;
  border-left: 5px solid ${({ $color }) => $color};
  border-radius: 4px;
  padding: 16px 24px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.3s ease;
  min-width: 250px;
`

const ToastNotification = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((type: ToastType) => {
    const id = Date.now()
    const messages: Record<ToastType, string> = {
      success: 'Operation completed successfully!',
      error: 'Something went wrong!',
      info: 'Here is some useful information.'
    }

    setToasts((prev) => [...prev, { id, message: messages[type], type }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#6d5b98]'>
      <div className='flex gap-4'>
        <button
          type='button'
          className='px-6 py-3 bg-white text-[#6d5b98] font-bold rounded cursor-pointer text-sm hover:opacity-90 transition-opacity'
          onClick={() => addToast('info')}>
          Show Info
        </button>
        <button
          type='button'
          className='px-6 py-3 bg-[#2ecc71] text-white font-bold rounded cursor-pointer text-sm hover:opacity-90 transition-opacity'
          onClick={() => addToast('success')}>
          Show Success
        </button>
        <button
          type='button'
          className='px-6 py-3 bg-[#e74c3c] text-white font-bold rounded cursor-pointer text-sm hover:opacity-90 transition-opacity'
          onClick={() => addToast('error')}>
          Show Error
        </button>
      </div>

      <ToastContainer>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} $color={TOAST_CONFIG[toast.type].color}>
            <strong className='block mb-1'>
              {TOAST_CONFIG[toast.type].label}
            </strong>
            <span className='text-gray-600 text-sm'>{toast.message}</span>
          </ToastItem>
        ))}
      </ToastContainer>
    </div>
  )
}

export default ToastNotification
