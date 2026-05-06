function LanguageCard({ language, isActive, onSelect }) {
  return (
    <button
      className={isActive ? 'language active' : 'language'}
      onClick={() => onSelect(language)}
      style={{ '--language-accent': language.accent }}
      type="button"
    >
      <img className="language-icon" src={language.icon} alt="" />
      <div>
        <span>{language.name}</span>
        <small>{language.level}</small>
      </div>
    </button>
  )
}

export default LanguageCard
