export interface SocialLink {
    name: string;
    url: string;
    icon?: React.ReactNode;
    primary?: boolean;
}

export interface ProfileCardProps {
    name: string;
    location: string;
    bio: string;
    avatarUrl: string;
    links: SocialLink[]; 
}