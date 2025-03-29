import styles from './YouTubeThumb.module.scss'

type Props = {
  slug: string
}

export default function (props: Props) {
  const src = `http://img.youtube.com/vi/${props.slug}/maxresdefault.jpg`
  const href = `https://www.youtube.com/watch?v=${props.slug}`

  return (
    <a className={styles.container} href={href} target="_blank">
      <img src={src} width={1280} height={720} alt="" />
      <span className={styles.playIcon}></span>
    </a>
  )
}
