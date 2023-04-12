import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineArrowUp} from 'react-icons/ai'

import Header from '../Header'
import FiltersGroup from '../FiltersGroup'
import JobCard from '../JobCard'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    jobsList: [],
    apiStatus: apiStatusConstants.initial,
    scrolldown: false,
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const token = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedJobsList = data.jobs.map(eachJobItem => ({
        companyLogoUrl: eachJobItem.company_logo_url,
        employmentType: eachJobItem.employment_type,
        id: eachJobItem.id,
        jobDescription: eachJobItem.job_description,
        location: eachJobItem.location,
        packagePerAnnum: eachJobItem.package_per_annum,
        rating: eachJobItem.rating,
        title: eachJobItem.title,
      }))
      this.setState({
        jobsList: updatedJobsList,
        apiStatus: apiStatusConstants.success,
      })
      //   const {jobsList} = this.state
      //   console.log(jobsList)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTnProgress = () => (
    <div className="job-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobsList = () => {
    const {jobsList} = this.state
    const jobsView = jobsList.length !== 0
    return jobsView ? (
      <div className="all-job-cards-container">
        <ul className="jobs-listItems-container">
          {jobsList.map(eachJob => (
            <JobCard jobcard={eachJob} key={eachJob.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="noJobs-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          className="noJobs-img"
          alt="no jobs"
        />
        <h1 className="noJobs-heading">No Jobs Found</h1>
        <p className="noJobs-description">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="jobs-errorView-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <h1 className="jobs-failure-heading">Oops! Something Went Wrong</h1>
      <p className="jobs-failure-description">
        We cannot seem to find the page you are looking for
      </p>
      <button
        type="button"
        className="jobs-failure-button"
        onClick={this.getJobs}
      >
        Retry
      </button>
    </div>
  )

  status = () => {
    if (document.documentElement.scrollTop > 300) {
      this.setState({scrolldown: true})
    } else {
      this.setState({scrolldown: false})
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  renderAllViews = () => {
    window.onscroll = this.status
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderTnProgress()

      default:
        return null
    }
  }

  render() {
    const {scrolldown} = this.state
    const status = scrolldown ? 'flex' : 'none'
    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="jobs-content-container">
            <FiltersGroup
              employmentTypesList={employmentTypesList}
              salaryRangesList={salaryRangesList}
            />
            <div className="jobs-list-container">
              <div className="jobs-search-input-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="jobs-search-input"
                />
                <button
                  type="button"
                  data-testid="searchButton"
                  className="jobs-search-button"
                >
                  <BsSearch className="jobs-search-icon" />
                </button>
              </div>
              {this.renderAllViews()}
              <button
                type="button"
                className={`goTop ${status}`}
                onClick={this.scrollToTop}
              >
                <AiOutlineArrowUp className="top-icon" />
                go Top
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
