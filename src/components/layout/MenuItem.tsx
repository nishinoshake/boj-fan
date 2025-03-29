import Link from 'next/link'
import styles from './Menu.module.scss'
import { usePathname } from 'next/navigation'

const menuItems = [
  { text: '決定会合', href: '/meetings' },
  { text: '出演情報', href: '/events' },
  { text: '委員紹介', href: '/members' },
  { text: '用語説明', href: '/glossary' }
]

export default function Menu() {
  const pathname = usePathname()

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Link href="/">
          日銀
          <br />
          日和
        </Link>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => {
            const isActive = new RegExp(`^${item.href}`).test(pathname)

            return (
              <li className={styles.menuItem} key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.menuLink} ${isActive ? styles.menuLinkActive : ''}`}
                >
                  {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
