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
      { id: 1, pic: "https://images.unsplash.com/photo-1746249485303-d03ce345878d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D", caption: "Late night coding session!", likes: 250, date: "2025-05-21" },
      { id: 2, pic: "https://images.unsplash.com/photo-1747901718484-8883316cc00d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D", caption: "Fuel for bugs and builds ☕", likes: 198, date: "2025-05-19" },
      { id: 3, pic: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3NwYWNlfGVufDB8fDB8fHww", caption: "Commit. Push. Repeat.", likes: 315, date: "2025-05-15" },
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
      { id: 4, pic: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDJ8MHx8fDI%3D", caption: "Sprint planning done ✅", likes: 330, date: "2025-05-22" },
      { id: 5, pic: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3xlbnwwfHwwfHx8Mg%3D%3D", caption: "Execution is everything.", likes: 287, date: "2025-05-18" },
      { id: 6, pic: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D", caption: "Smooth workflows make happy teams.", likes: 412, date: "2025-05-16" },
      { id: 7, pic: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDJ8MHx8fDI%3D", caption: "Product pitch day!", likes: 369, date: "2025-05-14" },
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
      { id: 8, pic: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww", caption: "New wireframe concepts out!", likes: 420, date: "2025-05-23" },
      { id: 9, pic: "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhfGVufDB8fDB8fHww", caption: "Every pixel tells a story.", likes: 390, date: "2025-05-20" },
      { id: 10, pic: "https://images.unsplash.com/photo-1631860975656-f2834774d536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsaW18ZW58MHx8MHx8fDA%3Ds", caption: "Choosing the perfect palette 🎨", likes: 450, date: "2025-05-17" },
      { id: 11, pic: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHx8Mg%3D%3D", caption: "Figma Friday sketches!", likes: 310, date: "2025-05-15" },
      { id: 12, pic: "https://media.istockphoto.com/id/1304093999/photo/bitcoin-e-commerce-concept-on-digital-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=rnKfp35dt8JsjXejqSETpSDt4mFTqIZaAYJgsGlPSx0=", caption: "Prototype live now!", likes: 275, date: "2025-05-13" },
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
      { id: 13, pic: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", caption: "EDA phase done 📈", likes: 370, date: "2025-05-24" },
      { id: 21, pic: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D", caption: "Training my latest model!", likes: 440, date: "2025-05-21" },
      { id: 33, pic: "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWF8ZW58MHx8MHx8fDA%3D", caption: "Data visualization goals 💡", likes: 480, date: "2025-05-19" },
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
      { id: 91, pic: "https://media.istockphoto.com/id/1083982928/photo/jaipur-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=SnVNaUdmGc83CbWPiRrd7P9C0zBNKcvpTNyOEDWYDiU=", caption: "Optimized DB queries today 💪", likes: 190, date: "2025-05-20" },
      { id: 42, pic: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDI%3D", caption: "Built a new RESTful API!", likes: 230, date: "2025-05-18" },
      { id: 53, pic: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhfGVufDB8fDB8fHww", caption: "Refactored for scalability.", likes: 210, date: "2025-05-16" },
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
      { id: 6, pic: "https://images.unsplash.com/photo-1584476345376-44c20ef6587e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfDJ8MHx8fDI%3D", caption: "New campaign just dropped!", likes: 400, date: "2025-05-22" },
      { id: 72, pic: "https://images.unsplash.com/photo-1673296297425-40a212eff4ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3N8ZW58MHwyfDB8fHwy", caption: "Strategy days are the best days.", likes: 370, date: "2025-05-20" },
      { id: 33, pic: "https://images.unsplash.com/photo-1542829445-82856c90b9a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29jaWFsfGVufDB8MnwwfHx8Mg%3D%3D", caption: "Creative brainstorms = 💡", likes: 390, date: "2025-05-17" },
      { id: 40, pic: "https://images.unsplash.com/photo-1530139963092-abc04e3e371b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FsYXh5fGVufDB8MnwwfHx8Mg%3D%3D", caption: "Brand audit complete!", likes: 350, date: "2025-05-15" },
      { id: 50, pic: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZm9vZHxlbnwwfDJ8MHx8fDI%3D", caption: "Social strategy revamp 🚀", likes: 415, date: "2025-05-13" },
      { id: 60, pic: "https://images.unsplash.com/photo-1575485670503-d039c615492e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfDJ8MHx8fDI%3D", caption: "Ad launch in 3...2...1!", likes: 390, date: "2025-05-11" },
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
      { id: 111, pic: "https://images.unsplash.com/photo-1542829445-82856c90b9a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29jaWFsfGVufDB8MnwwfHx8Mg%3D%3D", caption: "Pipeline green ✅", likes: 320, date: "2025-05-24" },
      { id: 222, pic: "https://images.unsplash.com/photo-1575485670503-d039c615492e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfDJ8MHx8fDI%3D", caption: "AWS config cleanup today.", likes: 275, date: "2025-05-22" },
      { id: 38, pic: "https://images.unsplash.com/photo-1584476345376-44c20ef6587e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfDJ8MHx8fDI%3D", caption: "Docker all the things 🐳", likes: 310, date: "2025-05-20" },
      { id: 49, pic: "https://images.unsplash.com/photo-1673296297425-40a212eff4ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3N8ZW58MHwyfDB8fHwy", caption: "K8s cluster upgrade completed!", likes: 290, date: "2025-05-17" },
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
      { id: 100, pic: "https://images.unsplash.com/photo-1584476345376-44c20ef6587e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfDJ8MHx8fDI%3D", caption: "Bug bash complete! 🐞", likes: 270, date: "2025-05-21" },
      { id: 29, pic: "https://images.unsplash.com/photo-1575485670503-d039c615492e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfDJ8MHx8fDI%3D", caption: "Regression suite passed 💯", likes: 295, date: "2025-05-19" },
      { id: 69, pic: "https://images.unsplash.com/photo-1542829445-82856c90b9a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29jaWFsfGVufDB8MnwwfHx8Mg%3D%3D", caption: "Debugging = detective mode 🔍", likes: 310, date: "2025-05-16" },
    ]
  }
];

export default UsersData;
