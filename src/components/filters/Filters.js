import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FiltersForm from './FiltersForm'
import { applyFilter } from '../../action-creators/action-creators'

import './form-filters.scss'

class Filters extends Component {

  sendData = (evt) => {
    const { applyFilter } = this.props
    const filterData = {
      name: evt.target.name,
      value: evt.target.value,
      isChecked: evt.target.checked
    }

    applyFilter(filterData)
  }

  render () {
    return (
      <FiltersForm 
        {...this.props}
        sendData={this.sendData}
      />
    )
  }
}

Filters.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  hairColors: PropTypes.array,
  heights: PropTypes.array,
  applyFilter: PropTypes.func
}

export default connect(state => ({
  from: state.users.age.from,
  to: state.users.age.to,
  hairColors: state.users.hairColors,
  heights: state.users.heights,
}), { applyFilter })(Filters)
