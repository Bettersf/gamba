import { PropsWithChildren } from 'react'
import { GambaUiProvider } from './context'

export interface GambaUiProps {
  /**
   * ToS for user to accept before creating an account
   */
  tos?: JSX.Element

  /**
   * Callback handler for any errors (Create account, close account, etc.)
   */
  onError?: (err: any) => void

  /**
   * Callback handler for when the user claims funds
   */
  onWithdraw?: (x: any) => void
}

type GambaUiProviderProps = React.PropsWithChildren<GambaUiProps>

function Content({ children }: PropsWithChildren) {
  // const { modal, setModal } = useGambaUi()

  // useGambaError((err) => {
  //   if (err.message === GambaError.PLAY_WITHOUT_CONNECTED) {
  //     setModal(true)
  //   }
  // })

  return (
    <>
      {/* {modal && (
        <Modal onClose={() => setModal(false)}>
          <GambaModal />
        </Modal>
      )} */}
      {children}
    </>
  )
}

export function GambaUi({ children, ...props }: GambaUiProviderProps) {
  return (
    <GambaUiProvider {...props}>
      <Content>
        {children}
      </Content>
    </GambaUiProvider>
  )
}
