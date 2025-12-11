import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Sticky Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Makeup Guide Logo" width={32} height={32} style={{ borderRadius: '8px', marginRight: '10px' }} />
          Makeup Guide
        </div>
        <a href="/makeup-artist.apk" download className={styles.navButton}>
          Download App
        </a>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.floatingOrb} ${styles.orb1}`} />
        <div className={`${styles.floatingOrb} ${styles.orb2}`} />
        <h1 className={styles.title}>
          Master the Art of Makeup
        </h1>
        <p className={styles.subtitle}>
          The ultimate guide to beauty in your pocket. Learn from professionals, track your progress, and explore endless looks.
        </p>
        <div className={styles.buttonGroup}>
          <a href="/makeup-artist.apk" download className={styles.primaryButton}>
            Download for Android
            <span style={{ fontSize: '0.8em', opacity: 0.8, marginLeft: '8px' }}>v1.0.1+2</span>
          </a>
          <a href="/makeup-artist.apk" download className={styles.secondaryButton}>
            Download for iOS
          </a>
        </div>
      </section>

      {/* Marquee Section */}
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <span>FEATURED IN: VOGUE • ELLE • COSMOPOLITAN • HARPER'S BAZAAR • GLAMOUR • VOGUE • ELLE • COSMOPOLITAN • HARPER'S BAZAAR • GLAMOUR</span>
          <span>FEATURED IN: VOGUE • ELLE • COSMOPOLITAN • HARPER'S BAZAAR • GLAMOUR • VOGUE • ELLE • COSMOPOLITAN • HARPER'S BAZAAR • GLAMOUR</span>
        </div>
      </div>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1M+</span>
            <span className={styles.statLabel}>Downloads</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>4.9/5</span>
            <span className={styles.statLabel}>App Rating</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>Tutorials</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Makeup Artist?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Expert Tutorials</h3>
              <p className={styles.cardText}>
                Step-by-step video guides from professional makeup artists.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Track Your Progress</h3>
              <p className={styles.cardText}>
                Keep track of mastered looks and your daily practice streak.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Personalized Tips</h3>
              <p className={styles.cardText}>
                Get daily beauty tips tailored to your skin type and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Download App</h3>
              <p className={styles.stepDesc}>Get the app on your device and create your personal beauty profile.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Choose a Look</h3>
              <p className={styles.stepDesc}>Browse thousands of trending looks and select one you want to master.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Follow & Learn</h3>
              <p className={styles.stepDesc}>Watch step-by-step tutorials and track your progress as you improve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContainer}>
          <h2 className={styles.sectionTitle}>Loved by Thousands</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"This app completely changed how I do my makeup. The tutorials are so easy to follow!"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar} />
                <div>
                  <span className={styles.authorName}>Sarah J.</span>
                  <span className={styles.authorRole}>Makeup Enthusiast</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"I love tracking my daily streak. It keeps me motivated to practice every single day."</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar} />
                <div>
                  <span className={styles.authorName}>Emily R.</span>
                  <span className={styles.authorRole}>Beginner Artist</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"The personalized tips are spot on for my skin type. Highly recommend this app!"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar} />
                <div>
                  <span className={styles.authorName}>Jessica M.</span>
                  <span className={styles.authorRole}>Professional MUA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className={styles.screenshots}>
        <div className={`${styles.floatingOrb} ${styles.orb3}`} />
        <div className="container">
          <h2 className={styles.sectionTitle}>See it in Action</h2>
          <div className={styles.screenshotGrid}>
            {/* Placeholders for screenshots - in a real app these would be Next.js Images */}
            <div className={styles.screenshotFrame}>
              <div className={styles.screenshotPlaceholder}>App Home</div>
            </div>
            <div className={styles.screenshotFrame}>
              <div className={styles.screenshotPlaceholder}>Looks Gallery</div>
            </div>
            <div className={styles.screenshotFrame}>
              <div className={styles.screenshotPlaceholder}>Tutorial Player</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Is the app free to use?</div>
            <div className={styles.faqAnswer}>Yes! You can download and access basic features for free. We also offer a premium subscription for advanced tutorials.</div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Can I save my favorite looks?</div>
            <div className={styles.faqAnswer}>Absolutely. You can create your own collection of favorite looks to revisit anytime.</div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Is it available on both iOS and Android?</div>
            <div className={styles.faqAnswer}>Yes, Makeup Artist is available on both the App Store and Google Play Store.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.sectionTitle}>Ready to Transform?</h2>
        <div className={styles.buttonGroup}>
          <a href="#" className={styles.primaryButton}>
            Get the App Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Makeup Guide App. All rights reserved.</p>
      </footer>
    </div>
  );
}
