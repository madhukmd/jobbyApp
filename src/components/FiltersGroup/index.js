import {BsSearch} from 'react-icons/bs'

import ProfileCard from '../ProfileCard'
import './index.css'

const FiltersGroup = props => {
  const renderInputSearch = () => {
    const t = true
    return (
      <div className="search-input-container">
        <input type="search" placeholder="Search" className="search-input" />
        <button
          type="button"
          data-testid="searchButton"
          className="search-button"
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div className="employment-container">
        <h1 className="employment-heading"> Type of Employment</h1>
        <ul className="employment-list">
          {employmentTypesList.map(eachType => (
            <li className="employ-list-item" key={eachType.employmentTypeId}>
              <input
                type="checkbox"
                id={eachType.employmentTypeId}
                value={eachType.employmentTypeId}
              />
              <label
                htmlFor={eachType.employmentTypeId}
                className="employ-label-heading"
              >
                {eachType.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary-container">
        <h1 className="salary-heading">Salary Range</h1>
        <ul className="salary-list">
          {salaryRangesList.map(eachSalary => (
            <li className="salary-list-item" key={eachSalary.salaryRangeId}>
              <input
                type="radio"
                id={eachSalary.salaryRangeId}
                value={eachSalary.salaryRangeId}
              />
              <label
                htmlFor={eachSalary.salaryRangeId}
                className="salary-label-heading"
              >
                {eachSalary.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderInputSearch()}
      <ProfileCard />
      <hr className="line" />
      {renderTypeOfEmployment()}
      <hr className="line" />
      {renderSalaryRange()}
    </div>
  )
}
export default FiltersGroup
