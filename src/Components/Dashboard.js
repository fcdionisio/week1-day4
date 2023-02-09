import React, { Component } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

class Dashboard extends Component {
  state = {
    post: [],
  };

  componentDidMount = () => {
    //api calls
    let url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

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
        <table>
          <thead>
            <tr>
              <th>Company ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody>

            {this.state.post.map((user) => {
              return (
                <tr
                  key={user.id}>
                  <td> {user.id}</td>
                  <td><img src={user.imageUrl} alt="image" /></td>
                  <td style={{ color: "red" }}>
                      {user.firstName} {user.lastName}
                  </td>
                  <td> {user.email}</td>
                  

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
