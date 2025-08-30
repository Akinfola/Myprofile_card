import React from 'react';
import './ProfileCard.css';


interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
  primary?: boolean;
}

interface ProfileCardProps {
  name: string;
  location: string;
  bio: string;
  avatarUrl?: string;
  links: SocialLink[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  name, 
  location, 
  bio, 
  avatarUrl, 
  links 
}) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="profile-card">
      <div className="profile-card__avatar">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={`${name}'s avatar`} 
            className="avatar-image" 
          />
        ) : (
          <div className="avatar-placeholder"></div>
        )}
      </div>
      
      <h1 className="profile-card__name">{name}</h1>
      
      <p className="profile-card__location">{location}</p>
      
      <p className="profile-card__bio">{bio}</p>
      
      <div className="profile-card__links">
        {links.map((link, index) => (
          <button
            key={index}
            className={`profile-card__link ${link.primary ? 'profile-card__link--primary' : ''}`}
            onClick={() => handleLinkClick(link.url)}
          >
            {link.icon && <span className="link-icon">{link.icon}</span>}
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;