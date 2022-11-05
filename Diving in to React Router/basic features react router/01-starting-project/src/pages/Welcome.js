import { Route } from "react-router-dom";

const Welcome = () => {

  return (
    <section>
      <h1>Welcome</h1>
      <Route path='/welcome/newuser'>
      <p>new user</p>
      </Route>
    </section>
  )


}

export default Welcome;