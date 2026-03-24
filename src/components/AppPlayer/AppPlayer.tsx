import ReactPlayer from 'react-player'

type AppPlayerProps = {
  src: string
  isPlaying: boolean
  loop?: boolean
  muted?: boolean
  width?: string
  height?: string
  className?: string
  onEnded?: () => void
}

export default function AppPlayer({
  src,
  isPlaying,
  loop = false,
  muted = false,
  width = '800px',
  height = '452px',
  className,
  onEnded
}: AppPlayerProps) {
  return (
    <ReactPlayer
      src={src}
      width={width}
      height={height}
      playing={isPlaying}
      onEnded={onEnded}
      loop={loop}
      muted={muted}
      className={className}
    />
  )
}
