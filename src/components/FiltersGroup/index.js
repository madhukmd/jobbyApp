import {BsSearch} from 'react-icons/bs'

import ProfileCard from '../ProfileCard'
import './index.css'

const FiltersGroup = props => {
  const renderInputSearch = () => {
    const mobileSearch = event => {
      const {onSearchChange} = props
      onSearchChange(event)
    }

    const mobileEnter = event => {
      const {onEnterSearch} = props
      onEnterSearch(event)
    }
    const {getJobs} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={mobileSearch}
          onKeyDown={mobileEnter}
        />
        <button
          type="button"
          data-testid="searchButton"
          className="search-button"
          onClick={getJobs}
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
          {employmentTypesList.map(eachType => {
            const {changeEmployeeOptions} = props
            const changeEmp = event => {
              changeEmployeeOptions(event.target.value)
            }
            return (
              <li
                className="employ-list-item"
                key={eachType.employmentTypeId}
                onChange={changeEmp}
              >
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
            )
          })}
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
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            const onChangeSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-list-item"
                key={eachSalary.salaryRangeId}
                onClick={onChangeSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  value={eachSalary.salaryRangeId}
                  name="salary"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="salary-label-heading"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
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
