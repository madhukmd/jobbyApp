import './index.css'

const SkillsCard = props => {
  const {skill} = props
  const {imageUrl, name} = skill

  return (
    <li className="skills-item-container">
      <div className="skills-container">
        <img src={imageUrl} alt={name} className="skill-img" />
        <p className="skill-name">{name}</p>
      </div>
    </li>
  )
}
export default SkillsCard
