import React, { Component } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

class Dashboard extends Component {
  state = {
    post: [],
  };

  componentDidMount = () => {
    //api calls
    let url = "https://hub.dummyapis.com/employee?noofRecords=25&idStarts=2001";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    const postList = this.state.post.length ? (
      <>
    <div className="row">
    <div className="col s1">
    </div>
    <div className="col 10">
      <h2>List of Donators</h2>
    </div>
  </div>

  <div className="row">
    <div className="col s3">
    </div>
    <div className="col s6">

      <div className="video-container">
        <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="col s3">
      </div>
    </div>
  </div>


        <table>
          <thead>
            <tr>
              <th>Company ID</th>
              {/* <th>Photo</th> */}
              <th>Name</th>
              <th>E-mail</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Contact Number</th>
            </tr>
          </thead>

          <tbody>

            {this.state.post.map((user) => {
              return (
                <tr
                  key={user.id}>
                  <td> {user.id}</td>
                  {/* <td><img src={user.imageUrl} alt="image" /></td> */}
                  <td style={{ color: "red" }}>
                      {user.firstName} {user.lastName}
                  </td>
                  <td> {user.email}</td>
                  <td> {user.dob}</td>
                  <td> {user.age}</td>
                  <td> {user.contactNumber}</td>
                  

                </tr>
              );
            })}


          </tbody>
        </table>
      </>
    ) : (
      <ClipLoader
        color="blue"
        loading="true"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

    return <>{postList}</>;
  }

}

export default Dashboard;
