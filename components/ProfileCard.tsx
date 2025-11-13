import React from 'react';

// --- Icon Components (Replacing lucide-react) ---
// We define simple SVG components here to replace the imported icons.

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m12 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.2.1-.3.6-1.5 0-3.1 0 0-1.1-.3-3.5 1.3-1-.3-2.1-.4-3.2-.4-1.1 0-2.2.1-3.2.4C2.6 6 1.5 6.3 1.5 6.3c-.6 1.6-.1 2.8 0 3.1-.8.8-1.3 1.9-1.3 3.2 0 4.7 2.7 5.8 5.5 6.1-.6.6-.6 1.2-.5 2V22" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75v.5A29 29 0 0 0 3.46 18c.3.94 1.12 1.62 2.07 1.78C7.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12.25v-.5a29 29 0 0 0-2.54-5.33zM9.75 15.5v-7l5.15 3.5z" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 9h4v12H4z" />
    <circle cx="6" cy="6" r="2" />
  </svg>
);

// --- Profile Card Component ---
export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  className?: string;
  flipped?: boolean;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = "Michael Chen",
    title = "Senior Software Engineer, Cloud Infrastructure",
    description = "Michael Chen is a seasoned software engineer at TechFlow Solutions with over 8 years of experience building scalable cloud infrastructure and microservices. He specializes in DevOps automation and leads the platform engineering team that serves millions of users daily.",
    imageUrl = "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl = "#",
    twitterUrl = "#",
    youtubeUrl = "#",
    linkedinUrl = "#",
    className,
    flipped = false,
  } = props;

  const socialIcons = [
    { icon: Github, url: githubUrl, label: "GitHub" },
    { icon: Twitter, url: twitterUrl, label: "Twitter" },
    { icon: Youtube, url: youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={`w-full max-w-full mx-auto ${className || ''}`}>
      {/* Desktop */}
      <div className={`hidden md:flex relative items-center ${flipped ? 'flex-row-reverse' : ''}`}>
        {/* Square Image */}
        <div className='w-[350px] h-[350px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center'>
          <img
            src={imageUrl}
            alt={name}
            width={350}
            height={350}
            className='w-full h-full object-cover'
            draggable={false}
          />
        </div>
        {/* Overlapping Card */}
        <div
          className={`bg-white dark:bg-card rounded-3xl shadow-2xl p-6 ${
            flipped ? 'mr-[-60px]' : 'ml-[-60px]'
          } z-10 flex-1`}
        >
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
              {name}
            </h2>
            <p className='text-sm font-medium text-gray-700 dark:text-gray-500'>
              {title}
            </p>
          </div>
          <p className='text-black dark:text-white text-base leading-relaxed mb-6'>
            {description}
          </p>
          <div className='flex space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105'
                aria-label={label}
              >
                <Icon className='w-5 h-5 text-white dark:text-gray-900' />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Square Mobile Image */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6 flex items-center justify-center'>
          <img
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className='w-full h-full object-cover'
            draggable={false}
          />
        </div>
        <div className='px-4'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
            {name}
          </h2>
          <p className='text-sm font-medium text-gray-600 dark:text-gray-300 mb-4'>
            {title}
          </p>
          <p className='text-black dark:text-white text-sm leading-relaxed mb-6'>
            {description}
          </p>
          <div className='flex justify-center space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200'
                aria-label={label}
              >
                <Icon className='w-5 h-5 text-white dark:text-gray-900' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
