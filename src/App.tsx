import ProfileCard from './ProfileCard';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

function App() {
  const profileData = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    bio: "Front-end developer and avid reader.",
    avatarUrl: "", // Add avatar URL if available
    links: [
      { name: "GitHub", url: "https://github.com", icon: <FaGithub />, primary: true },
      { name: "Frontend Mentor", url: "https://frontendmentor.io" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
      { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
      { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> }
    ]
  };

  return (
    <div className="App">
      <div className="container">
        <ProfileCard {...profileData} />
      </div>
    </div>
  );
}

export default App;