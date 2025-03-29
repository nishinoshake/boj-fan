import styles from './YouTubeIframe.module.scss'

type Props = {
  slug: string
}

export default function (props: Props) {
  const src = `https://www.youtube.com/embed/${props.slug}`

  return (
    <div className={styles.container}>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}
