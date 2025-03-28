import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { clsx } from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import IconOctocat from '../../static/img/icons/octocat.svg'
import SquareMesh from '../components/Mesh'
import styles from './index.module.css'
import HomepageFeatures from '../components/features'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useColorMode } from '@docusaurus/theme-common'

gsap.registerPlugin(ScrollTrigger)

const description =
  "Our API Dev Portal is designed to deliver an intuitive, well-organized experience for consulting API documentation. Built with Docusaurus, it features a modern, user-friendly interface that helps developers quickly access critical information. Explore our documentation to discover how to maximize the Quantum API Dev Portal’s capabilities—from installation and documentation generation to leveraging pre-built templates."

function Home() {
  const { i18n } = useDocusaurusContext()

  useEffect(() => {
    document.querySelector('.navbar__inner').classList.add(styles.container)

    gsap.from(`.${styles.scrollToDisplay}`, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.25,
      scrollTrigger: {
        trigger: `.${styles.scrollToDisplay}`,
        toggleActions: 'restart none none none',
      },
    })

    gsap.from(`.${styles.scrollToDisplayX}`, {
      duration: 1,
      opacity: 0,
      x: 0,
      y: 100,
      stagger: 0.25,
      scrollTrigger: {
        trigger: `.${styles.scrollToDisplayX}`,
        toggleActions: 'restart none none none',
      },
    })
  }, [])

  return (
    <Layout description={translate({ message: description, id: 'home.desc' })}>
      <Head>
        <title>Quantum API Dev Portal</title>
      </Head>
      <main className={styles.main}>
        {/* Mesh como background */}
        <BrowserOnly>{() => <SquareMesh />}</BrowserOnly>

        <div className={styles.hero}>
          <div className={styles.container}>
            <h1 className={clsx(styles.heroTitle)}>
              {i18n.currentLocale === 'en' && (
                <>
                  <span>Welcome to the </span> <br />
                  <span className={clsx(styles.highlight)}> Quantum API Dev Portal </span> <br />
                </>
              )}
            </h1>
            <p className={styles.description}>
              <Translate id="home.desc">{description}</Translate>
            </p>
            <div className={styles.buttonGroup}>
              <Link to="/docs/intro/" className={styles.primaryButton}>
                <Translate id="home.getstarted">Get Started →</Translate>
              </Link>
              <Link to="https://github.com/konneqt/quantum-dev-portal" className={styles.secondaryButton}>
                <IconOctocat className={styles.icon} />
                GitHub
              </Link>
            </div>

            {/* Imagem com modo claro/escuro dentro de BrowserOnly */}
            <BrowserOnly>
              {() => {
                const { colorMode } = useColorMode()
                const lightImage = useBaseUrl('img/home/doc-dark.png')
                const darkImage = useBaseUrl('img/home/doc.png')
                const imageSrc = colorMode === 'dark' ? darkImage : lightImage

                const boxShadowColor =
                  colorMode === 'dark' ? 'rgba(99, 148, 242, 0.29)' : 'rgba(26, 25, 25, 0.5)'

                return (
                  <div className="image-container">
                    <img
                      src={imageSrc}
                      alt="qdp image"
                      width="50%"
                      style={{
                        boxShadow: `0px 0px 12px 10px ${boxShadowColor}`,
                        borderRadius: '12px',
                      }}
                    />
                  </div>
                )
              }}
            </BrowserOnly>
          </div>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  )
}

export default Home
