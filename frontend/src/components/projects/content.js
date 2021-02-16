import {
  ROUTE_ZORA_PROJECT,
  ROUTE_COPPOLA_PROJECT,
  ROUTE_MARIONETTE_PROJECT,
} from "../../constants/route_constants";

const ZORA_PROJECT_PHOTO_URL =
  "https://sanjeev-personal-site.s3.amazonaws.com/projects/projects-zora-header.png";

const COPPOLA_PROJECT_PHOTO_URL =
  "https://sanjeev-personal-site.s3.amazonaws.com/projects/lostintranslation.png";

const MARIONETTE_PROJECT_PHOTO_URL =
  "https://sanjeev-personal-site.s3.amazonaws.com/projects/marionette.png";

// const AINGRY_BIRDS_PHOTO_URL =
//   "https://sanjeev-personal-site.s3.amazonaws.com/projects/robot-bird.png";

export const projectContent = [
  {
    title: "Marionette",
    subtitle: "Movie recs using latent factor models",
    coverPhotoUrl: MARIONETTE_PROJECT_PHOTO_URL,
    onClickRoute: ROUTE_MARIONETTE_PROJECT,
  },
  {
    title: "Coppola",
    subtitle: "a React component library",
    coverPhotoUrl: COPPOLA_PROJECT_PHOTO_URL,
    onClickRoute: ROUTE_COPPOLA_PROJECT,
  },
  {
    title: "ZoraTV",
    subtitle: "Short videos of my dog Zora",
    coverPhotoUrl: ZORA_PROJECT_PHOTO_URL,
    onClickRoute: ROUTE_ZORA_PROJECT,
  },

  // {
  //   title: "AI.ngry birds",
  //   subtitle: "A robot learns to play angry birds",
  //   coverPhotoUrl: AINGRY_BIRDS_PHOTO_URL,
  //   onClickRoute: "",
  // },
];

export default projectContent;
