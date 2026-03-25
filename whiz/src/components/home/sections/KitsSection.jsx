const kitImageByName = {
  'WHIZ BUILDER': '/images/Whizbuilder.png',
  'WHIZ CREATOR': '/images/Whizcreator.png',
  'WHIZ BOX': '/images/Whizbox.png',
  'WHIZ INNOVATOR': '/images/Whizinnovator.png',
  'WHIZ INVENTOR': '/images/Whizinventor.png',
  'WHIZ IoT': '/images/Whiziot.png',
  'WHIZ BLUETOOTH KIT': '/images/Whizblue.png',
}

function KitsSection({ kits }) {
  return (
    <>
      <div className="section-head">
        <h2>WHIZROBO Educational Kits</h2>
      </div>
      <div className="programs-track">
        {kits.map((item, index) => (
          <article className="program-stage-card" key={item.name}>
            <div className="program-stage-step">
              <span>{`0${index + 1}`}</span>
            </div>
            <div className="kit-stage-media">
              <img src={kitImageByName[item.name] || '/images/kits.png'} alt={item.name} loading="lazy" />
            </div>
            <h3>{item.name}</h3>
            <p className="program-stage-overview">{item.description}</p>
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="program-outcome">{`Ideal for ${item.idealFor}`}</p>
            <div className="kit-card-actions">
              <button type="button" className="btn kit-btn kit-btn-primary">View Tutorials</button>
              <button type="button" className="btn kit-btn kit-btn-secondary">View Program</button>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export default KitsSection
