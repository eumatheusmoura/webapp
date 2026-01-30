import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export interface AppIconProps {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
  icon,
}) => {
  const logoSrc = icon ?? '/logo_sappy.png'
  const isImage = logoSrc.startsWith('/') || logoSrc.startsWith('http') || logoSrc.endsWith('.png') || logoSrc.endsWith('.svg') || logoSrc.endsWith('.jpg')

  if (isImage) {
    return (
      <span
        className={classNames(
          style.appIcon,
          size !== 'medium' && style[size],
          rounded && style.rounded,
          className ?? '',
        )}
        style={{ background: background ?? (logoSrc === '/logo_sappy.png' ? 'transparent' : undefined) }}
      >
        <img src={logoSrc} alt="" className="w-full h-full object-contain" />
      </span>
    )
  }

  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{ background }}
    >
      🤖
    </span>
  )
}

export default AppIcon
