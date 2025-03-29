import styles from './Heading.module.scss'

type Props = {
  heading: string
}

export default function (props: Props) {
  return <h1 className={styles.heading}>{props.heading}</h1>
}
