const productRequests = [
  {
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    comments: [
      {
        content:
          "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        username: "upbeat1811",
      },
      {
        content:
          "Please use fun, color-coded labels to easily identify them at a glance",
        username: "bleakmidwinter",
      },
    ],
  },
  {
    title: "Add a dark theme option",
    category: "feature",
    upvotes: 99,
    status: "suggestion",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    comments: [
      {
        content:
          "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        username: "hexagon.bestagon",
      },
      {
        content:
          "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",

        username: "hummingbird1",

        replies: [
          {
            content:
              "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
            replyingTo: "hummingbird1",

            username: "annev1990",
          },
          {
            content:
              "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            replyingTo: "annev1990",

            username: "voyager.344",
          },
        ],
      },
    ],
  },
  {
    title: "Q&A within the challenge hubs",
    category: "feature",
    upvotes: 65,
    status: "suggestion",
    description: "Challenge-specific Q&A would make for easy reference.",
    comments: [
      {
        content:
          "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",

        username: "soccerviewer8",
      },
    ],
  },
  {
    title: "Add image/video upload to feedback",
    category: "enhancement",
    upvotes: 51,
    status: "suggestion",
    description: "Images and screencasts can enhance comments on solutions.",
    comments: [
      {
        content:
          "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",

        username: "warlikeduke",
      },
      {
        content:
          "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",

        username: "peppersprime32",
      },
    ],
  },
  {
    title: "Ability to follow others",
    category: "feature",
    upvotes: 42,
    status: "suggestion",
    description: "Stay updated on comments and solutions other people post.",
    comments: [
      {
        content:
          "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",

        username: "arlen_the_marlin",

        replies: [
          {
            content:
              "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
            replyingTo: "arlen_the_marlin",

            username: "velvetround",
          },
        ],
      },
      {
        content:
          "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",

        username: "countryspirit",
      },
    ],
  },
  {
    title: "Preview images not loading",
    category: "bug",
    upvotes: 3,
    status: "suggestion",
    description:
      "Challenge preview images are missing when you apply a filter.",
  },
  {
    title: "More comprehensive reports",
    category: "feature",
    upvotes: 123,
    status: "planned",
    description:
      "It would be great to see a more detailed breakdown of solutions.",
    comments: [
      {
        content:
          "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",

        username: "arlen_the_marlin",
      },
      {
        content:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",

        username: "countryspirit",
      },
    ],
  },
  {
    title: "Learning paths",
    category: "feature",
    upvotes: 28,
    status: "planned",
    description:
      "Sequenced projects for different goals to help people improve.",
    comments: [
      {
        content:
          "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
        username: "soccerviewer8",
      },
    ],
  },
  {
    title: "One-click portfolio generation",
    category: "feature",
    upvotes: 62,
    status: "in-progress",
    description:
      "Add ability to create professional looking portfolio from profile.",
    comments: [
      {
        content:
          "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",

        username: "voyager.344",
      },
    ],
  },
  {
    title: "Bookmark challenges",
    category: "feature",
    upvotes: 31,
    status: "in-progress",
    description: "Be able to bookmark challenges to take later on.",
    comments: [
      {
        content:
          "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",

        username: "upbeat1811",
      },
    ],
  },
  {
    title: "Animated solution screenshots",
    category: "bug",
    upvotes: 9,
    status: "in-progress",
    description:
      "Screenshots of solutions with animations don’t display correctly.",
  },
  {
    title: "Add micro-interactions",
    category: "enhancement",
    upvotes: 71,
    status: "live",
    description: "Small animations at specific points can add delight.",
    comments: [
      {
        content:
          "I'd love to see this! It always makes me so happy to see little details like these on websites.",

        username: "arlen_the_marlin",

        replies: [
          {
            content:
              "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
            replyingTo: "arlen_the_marlin",

            username: "upbeat1811",
          },
        ],
      },
    ],
  },
];
export default productRequests;
