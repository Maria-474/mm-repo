import ReactPlayer from 'react-player'
import { AppLoader } from '@/components/AppLoader'
import { useState } from 'react'
import classes from './AppPlayer.module.scss'
import clsx from 'clsx'

type AppPlayerProps = {
  src: string
  isPlaying: boolean
  loop?: boolean
  muted?: boolean
  className?: string
  onTimeUpdate?: (currentTime: number) => void
  onEnded?: () => void
}

export const AppPlayer = ({
  src,
  isPlaying,
  loop = false,
  muted = false,
  className,
  onTimeUpdate,
  onEnded
}: AppPlayerProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const currentTime = e.currentTarget.currentTime

    onTimeUpdate?.(currentTime)
  }

  return (
    <div className={clsx(classes.playerWrapper, className)}>
      <ReactPlayer
        src={src}
        style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
        playing={isPlaying}
        onPlaying={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onEnded}
        loop={loop}
        muted={muted}
      />
      {isLoading && (
        <div className={classes.playerLoaderWrapper}>
          <AppLoader />
        </div>
      )}
    </div>
  )
}
