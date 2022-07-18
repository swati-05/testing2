import React from 'react'
import Trade_appliedLicenseTable from '../components/Trade_appliedLicenseTable'
import { Link } from 'react-router-dom'

function AppliedLicenses() {
  return (
    <>
<Link to="/appliedLicense"><Trade_appliedLicenseTable /></Link>
    </>
  )
}

export default AppliedLicenses