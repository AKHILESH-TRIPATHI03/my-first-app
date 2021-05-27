import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is first metup",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-IsSrGweogKbVFY8GFWe9GkRTbblnVSTjg&usqp=CAU",
//     address: "SPACE-X and TESLA",
//     description:
//       "Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. Musk became a multimillionaire in his late 20s when he sold his start-up company, Zip2, to a division of Compaq Computers.",
//   },
//   {
//     id: "m2",
//     title: "This is second metup",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXJN07DqKekZkItssxYnX9mk694cyi1Lytw&usqp=CAU",
//     address: "FACEBOOK",
//     description:
//       "Mark Zuckerberg is a self-taught computer programmer and co-founder, chair, and chief executive officer of Facebook (FB), which he founded in his Harvard University dorm room in 2004 along with Andrew McCollum, Dustin Moskovitz, Chris Hughes, and Eduardo Saverin.",
//   },
//   {
//     id: "m3",
//     title: "This is third metup",
//     image: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
//     address: "APPLE",
//     description:
//       "Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products as the iPod and the iPhone.12-May-2021",
//   },
// ];

function AllMeetuppage() {
  const [isLoading, setISLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setISLoading(true);
    fetch(
      "https://react-getting-started-22a83-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setISLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>loading.....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All meetups</h1>
      {/* <MeetupList meetups={DUMMY_DATA} /> */}
      <MeetupList meetups={loadedMeetups} />
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}
    </section>
  );
}

export default AllMeetuppage;
