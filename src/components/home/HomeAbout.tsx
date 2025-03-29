import styles from './HomeAbout.module.scss'

export default function () {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>このサイトについて</h2>
      <div className={styles.body}>
        <p>
          本サイト、日銀日和（にちぎんびより）は、日本銀行の非公式なファンサイトです。日銀メンバーの紹介や、金融政策決定会合をはじめとしたイベント、全国各地で行われるライブの内容を記録しています。
        </p>
        <p>
          日銀ファンの金融素人なので、色々と調べつつも最後は雰囲気で書いています。誤っている箇所がありましたら、お手数ですがXのDMかメールでご連絡をいただけますと、全力で感謝いたします。
        </p>
        <ul>
          <li>
            <a href="https://x.com/fxmuri" target="_blank">
              @fxmuri
            </a>
          </li>
          <li>
            <a href="mailto:lawson.and.7.11@gmail.com">
              lawson.and.7.11@gmail.com
            </a>
          </li>
        </ul>
        <p>
          また、本サイトのソースコードはGitHubで公開しています。
          <br />
          ソースに興味がある方や、機能追加をご希望の方はそちらをご覧ください。
        </p>
        <p>
          <a href="https://github.com/nishinoshake/boj-fan" target="_blank">
            nishinoshake/boj-fan
          </a>
        </p>
        <p>
          本サイトでは、広告やアクセス解析を設置していないため、個人情報を取り扱っていません。そのため、プライバシーポリシーは設けておりません。どうか、世界からクッキー同意が無くなりますように。
        </p>
        <p>
          委員の画像は、
          <a
            href="https://www.boj.or.jp/about/organization/policyboard/"
            target="_blank"
          >
            日本銀行のWebサイト
          </a>
          のものを勝手に使用しています。ごめんなさい。
        </p>
      </div>
    </div>
  )
}
