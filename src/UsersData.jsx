// const  UsersData = [
//   {
//     name: "Aarav Mehta",
//     username: "aarav_mehta",
//     description: "Coding life, coffee, and clean commits ☕💻",
//     followers: 1240,
//     following: 530,
//     designation: "Software Engineer",
//     image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//   },
//   {
//     name: "Priya Sharma",
//     username: "priya.sharma",
//     description: "Building dreams one product at a time 🚀",
//     followers: 2380,
//     following: 720,
//     designation: "Product Manager",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//   },
//   {
//     name: "Rahul Verma",
//     username: "rahul.designs",
//     description: "Designing with purpose 🎨 | UX matters",
//     followers: 1875,
//     following: 600,
//     designation: "UI/UX Designer",
//     image: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//   },
//   {
//     name: "Ananya Iyer",
//     username: "ananya_ai",
//     description: "Turning data into stories 📊 | AI believer",
//     followers: 3010,
//     following: 980,
//     designation: "Data Scientist",
//     image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//   },
//   {
//     name: "Karan Patel",
//     username: "karan.codes",
//     description: "API wizard 🧙‍♂️ | Backend is the backbone",
//     followers: 950,
//     following: 410,
//     designation: "Backend Developer",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//   },
//   {
//     name: "Sneha Reddy",
//     username: "sneha.markets",
//     description: "Marketing magic ✨ | Storytelling through strategy",
//     followers: 2080,
//     following: 870,
//     designation: "Marketing Executive",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//   },
//   {
//     name: "Vikram Singh",
//     username: "vikram_devops",
//     description: "Cloud. CI/CD. Containers. That’s the vibe ☁️🐳",
//     followers: 1785,
//     following: 630,
//     designation: "DevOps Engineer",
//     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//   },
//   {
//     name: "Neha Kapoor",
//     username: "neha.qa",
//     description: "Breaking code to make it stronger 🔍",
//     followers: 1220,
//     following: 540,
//     designation: "Quality Analyst",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
//   }
// ];


// export default UsersData;



const UsersData = [
  {
    name: "Aarav Mehta",
    username: "aarav_mehta",
    description: "Coding life, coffee, and clean commits ☕💻",
    followers: 1240,
    following: 530,
    designation: "Software Engineer",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?code", caption: "Late night coding session!", likes: 250, date: "2025-05-21" },
      { id: 2, image: "https://source.unsplash.com/featured/?coffee", caption: "Fuel for bugs and builds ☕", likes: 198, date: "2025-05-19" },
      { id: 3, image: "https://source.unsplash.com/featured/?laptop", caption: "Commit. Push. Repeat.", likes: 315, date: "2025-05-15" },
    ]
  },
  {
    name: "Priya Sharma",
    username: "priya.sharma",
    description: "Building dreams one product at a time 🚀",
    followers: 2380,
    following: 720,
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?teamwork", caption: "Sprint planning done ✅", likes: 330, date: "2025-05-22" },
      { id: 2, image: "https://source.unsplash.com/featured/?productivity", caption: "Execution is everything.", likes: 287, date: "2025-05-18" },
      { id: 3, image: "https://source.unsplash.com/featured/?workflow", caption: "Smooth workflows make happy teams.", likes: 412, date: "2025-05-16" },
      { id: 4, image: "https://source.unsplash.com/featured/?presentation", caption: "Product pitch day!", likes: 369, date: "2025-05-14" },
    ]
  },
  {
    name: "Rahul Verma",
    username: "rahul.designs",
    description: "Designing with purpose 🎨 | UX matters",
    followers: 1875,
    following: 600,
    designation: "UI/UX Designer",
    image: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?design", caption: "New wireframe concepts out!", likes: 420, date: "2025-05-23" },
      { id: 2, image: "https://source.unsplash.com/featured/?ux", caption: "Every pixel tells a story.", likes: 390, date: "2025-05-20" },
      { id: 3, image: "https://source.unsplash.com/featured/?colors", caption: "Choosing the perfect palette 🎨", likes: 450, date: "2025-05-17" },
      { id: 4, image: "https://source.unsplash.com/featured/?figma", caption: "Figma Friday sketches!", likes: 310, date: "2025-05-15" },
      { id: 5, image: "https://source.unsplash.com/featured/?prototype", caption: "Prototype live now!", likes: 275, date: "2025-05-13" },
    ]
  },
  {
    name: "Ananya Iyer",
    username: "ananya_ai",
    description: "Turning data into stories 📊 | AI believer",
    followers: 3010,
    following: 980,
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?data", caption: "EDA phase done 📈", likes: 370, date: "2025-05-24" },
      { id: 2, image: "https://source.unsplash.com/featured/?ai", caption: "Training my latest model!", likes: 440, date: "2025-05-21" },
      { id: 3, image: "https://source.unsplash.com/featured/?charts", caption: "Data visualization goals 💡", likes: 480, date: "2025-05-19" },
    ]
  },
  {
    name: "Karan Patel",
    username: "karan.codes",
    description: "API wizard 🧙‍♂️ | Backend is the backbone",
    followers: 950,
    following: 410,
    designation: "Backend Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?server", caption: "Optimized DB queries today 💪", likes: 190, date: "2025-05-20" },
      { id: 2, image: "https://source.unsplash.com/featured/?api", caption: "Built a new RESTful API!", likes: 230, date: "2025-05-18" },
      { id: 3, image: "https://source.unsplash.com/featured/?backend", caption: "Refactored for scalability.", likes: 210, date: "2025-05-16" },
    ]
  },
  {
    name: "Sneha Reddy",
    username: "sneha.markets",
    description: "Marketing magic ✨ | Storytelling through strategy",
    followers: 2080,
    following: 870,
    designation: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?marketing", caption: "New campaign just dropped!", likes: 400, date: "2025-05-22" },
      { id: 2, image: "https://source.unsplash.com/featured/?strategy", caption: "Strategy days are the best days.", likes: 370, date: "2025-05-20" },
      { id: 3, image: "https://source.unsplash.com/featured/?creativity", caption: "Creative brainstorms = 💡", likes: 390, date: "2025-05-17" },
      { id: 4, image: "https://source.unsplash.com/featured/?brand", caption: "Brand audit complete!", likes: 350, date: "2025-05-15" },
      { id: 5, image: "https://source.unsplash.com/featured/?socialmedia", caption: "Social strategy revamp 🚀", likes: 415, date: "2025-05-13" },
      { id: 6, image: "https://source.unsplash.com/featured/?campaign", caption: "Ad launch in 3...2...1!", likes: 390, date: "2025-05-11" },
    ]
  },
  {
    name: "Vikram Singh",
    username: "vikram_devops",
    description: "Cloud. CI/CD. Containers. That’s the vibe ☁️🐳",
    followers: 1785,
    following: 630,
    designation: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?devops", caption: "Pipeline green ✅", likes: 320, date: "2025-05-24" },
      { id: 2, image: "https://source.unsplash.com/featured/?cloud", caption: "AWS config cleanup today.", likes: 275, date: "2025-05-22" },
      { id: 3, image: "https://source.unsplash.com/featured/?docker", caption: "Docker all the things 🐳", likes: 310, date: "2025-05-20" },
      { id: 4, image: "https://source.unsplash.com/featured/?kubernetes", caption: "K8s cluster upgrade completed!", likes: 290, date: "2025-05-17" },
    ]
  },
  {
    name: "Neha Kapoor",
    username: "neha.qa",
    description: "Breaking code to make it stronger 🔍",
    followers: 1220,
    following: 540,
    designation: "Quality Analyst",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    posts: [
      { id: 1, image: "https://source.unsplash.com/featured/?testing", caption: "Bug bash complete! 🐞", likes: 270, date: "2025-05-21" },
      { id: 2, image: "https://source.unsplash.com/featured/?qa", caption: "Regression suite passed 💯", likes: 295, date: "2025-05-19" },
      { id: 3, image: "https://source.unsplash.com/featured/?debug", caption: "Debugging = detective mode 🔍", likes: 310, date: "2025-05-16" },
    ]
  }
];

export default UsersData;
