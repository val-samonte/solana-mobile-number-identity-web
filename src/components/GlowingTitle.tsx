import classNames from 'classnames'

export function GlowingTitle({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <div className={classNames('relative', className)}>
      <span
        aria-hidden
        className='select-none pointer-events-none absolute inset-0 blur opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-red-400 to-emerald-600'
      >
        {text}
      </span>
      <span className='relative'>{text}</span>
    </div>
  )
}
