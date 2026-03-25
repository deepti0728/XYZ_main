const firstRowLogos = [
  '/images/partners/niti.png',
  '/images/partners/atal.png',
  '/images/partners/g20.png',
  '/images/partners/isro.png',
  '/images/partners/pscst.png',
  '/images/partners/moef.png',
]

const secondRowLogos = [
  '/images/partners/green.png',
  '/images/partners/imp.png',
  '/images/partners/lifestyle.png',
  '/images/partners/startup.png',
  '/images/partners/aryaman.png',
]

const corporateLogos = [
  '/images/partners/stem.png',
  '/images/partners/itic.png',
  '/images/partners/iimb.png',
  '/images/partners/canon.png',
  '/images/partners/intel.png',
  '/images/partners/hp.png',
  '/images/partners/lenovo.png',
  '/images/partners/tata.png',
]

const schoolLogos = [
  '/images/partners/bal.png',
  '/images/partners/BCM.png',
  '/images/partners/calling.png',
  '/images/partners/chitkara.png',
  '/images/partners/D.A.V.webp',
  '/images/partners/Delhi.png',
  '/images/partners/didactius.png',
  '/images/partners/G.H.png',
  '/images/partners/GRD.png',
  '/images/partners/guru.png',
  '/images/partners/guru2.png',
  '/images/partners/heart.png',
  '/images/partners/jesus.png',
  '/images/partners/khalsa.png',
  '/images/partners/LPU.png',
  '/images/partners/madhavrao.png',
  '/images/partners/MBCIE.png',
  '/images/partners/millennium.png',
  '/images/partners/mount.png',
  '/images/partners/roop.png',
  '/images/partners/satpaul.png',
  '/images/partners/shamrock.png',
  '/images/partners/shreeram.png',
  '/images/partners/wisdom.png',
]

function MarqueeRow({ logos, label }) {
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="partners-marquee" aria-label={label}>
      <div className="partners-marquee__track">
        {duplicatedLogos.map((logo, index) => (
          <figure className="partner-logo" key={`${label}-${index}`}>
            <img src={logo} alt={`${label}-${index}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  )
}

function PartnersSection() {
  return (
    <section className="section partners-section" aria-label="Our partners">
      <div className="section-head partners-head">
        <h2>Our partners</h2>
      </div>
      <div className="partners-head partners-head--secondary partners-head__subtitle-row">
        <p>Key Indian Government Partnerships</p>
        <span className="partners-head__line" aria-hidden="true" />
      </div>
      <MarqueeRow logos={firstRowLogos} label="Government partners" />
      <MarqueeRow logos={secondRowLogos} label="Government partners secondary" />
      <div className="partners-head partners-head--secondary">
        <p>Key Institution / Corporate Partnerships</p>
      </div>
      <MarqueeRow logos={corporateLogos} label="Institution corporate partners" />
      <div className="partners-head partners-head--secondary">
        <p>Key School/Colleges Partnerships</p>
      </div>
      <MarqueeRow logos={schoolLogos} label="School partners" />
    </section>
  )
}

export default PartnersSection
