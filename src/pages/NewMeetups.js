import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupform";
function NewMeetuppage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-22a83-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetuppage;
