import { Component, ErrorInfo, ReactNode } from 'react'
import { AppButton } from '../UI/AppButton'
import classes from './ErrorBoundary.module.scss'

type Props = {
  children: ReactNode
  fallback?: ReactNode
  onReset?: () => void
}

type State = {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled UI error:', error, info)
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null })
    this.props.onReset?.()
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className={classes.errorPageWrapper}>
          <p>Something went wrong :(</p>
          <AppButton text="Try again" onButtonClick={this.resetErrorBoundary} />
        </div>
      )
    }

    return this.props.children
  }
}
