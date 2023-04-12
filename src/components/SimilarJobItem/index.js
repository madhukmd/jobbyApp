import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const SimilarJobItem = props => {
  const {similarJob} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJob
  return (
    <li className="similar-job-item">
      <div className="similar-card-item-container">
        <div className="similar-logo-title-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="similar-company-logo"
          />
          <div className="similar-title-rating-container">
            <h1 className="similar-title-heading">{title}</h1>
            <div className="similar-rating-container">
              <BsStarFill className="rating-icon" />
              <p className="similar-rating-heading">{rating}</p>
            </div>
          </div>
        </div>
        <h1 className="description-heading">Description</h1>
        <p className="description">{jobDescription}</p>
        <div className="similar-location-employee-container">
          <div className="location-container">
            <MdLocationOn className="location-icon" />
            <p className="location-heading">{location}</p>
          </div>
          <div className="employee-type-container">
            <BsFillBriefcaseFill className="briefcase-icon" />
            <p className="employee-type-heading">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default SimilarJobItem
