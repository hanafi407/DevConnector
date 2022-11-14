<<<<<<< HEAD
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile,deleteAccount } from "../../action/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education}/>
          <div className="my-2">
            <button onClick={()=>deleteAccount()} className="btn btn-danger">
              <i className="fas fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>

          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
=======
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../action/profile";

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
>>>>>>> 9d4d706d8c8070400b4a7dbbe9b8eab7bbf8776b
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
<<<<<<< HEAD
  deleteAccount:PropTypes.func.isRequired,
=======
>>>>>>> 9d4d706d8c8070400b4a7dbbe9b8eab7bbf8776b
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

<<<<<<< HEAD
export default connect(mapStateToProps, { getCurrentProfile,deleteAccount })(Dashboard);
=======
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
>>>>>>> 9d4d706d8c8070400b4a7dbbe9b8eab7bbf8776b
