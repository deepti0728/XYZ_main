function AchievementsSection({ stats }) {
  return (
    <section className="section" id="achievements">
      <div className="section-head">
        <h2>Our Achievements</h2>
      </div>
      <div className="stats-row">
        {stats.map((item) => (
          <article className="stat" key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
