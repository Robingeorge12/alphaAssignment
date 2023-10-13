import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="" element={""} />
<Route path="" element={""} />
<Route path="" element={""} /> */}
      </Routes>
    </div>
  );
}

export default AllRoute;

// import React from 'react'
// import { connect } from 'react-redux'

// export const AllRoute = (props) => {
//   return (
//     <div>AllRoute</div>
//   )
// }

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(AllRoute)
