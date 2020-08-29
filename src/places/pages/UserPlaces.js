import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440",
    address: "20 W 34th St, New York, NY 10001, United States",

    latitude: 40.7484405,
    longitude: -73.9878584,

    creator: "u1",
  },
  {
    id: "p2",
    title: "River Thames",
    description:
      "The River Thames, known alternatively in parts as the Isis, is a river that flows through southern England including London. At 215 miles, it is the longest river entirely in England and the second-longest in the United Kingdom, after the River Severn. It flows through Oxford, Reading, Henley-on-Thames and Windsor.",
    imageUrl:
      "https://newseu.cgtn.com/news/7a517a4e3041544e34417a4d774d6a4e314d7a4e31457a6333566d54/img/5566c22cd5da41b2a7695a97d3cf61c0/5566c22cd5da41b2a7695a97d3cf61c0.jpg",
    address: "Cities: London, Oxford, Henley-on-Thames, Reading, Windsor",
    latitude: 51.585574,
    longitude: -0.616075,
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
