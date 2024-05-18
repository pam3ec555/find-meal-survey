import { FC } from 'react';
import googleIcon from '../assets/google-icon.svg';
import appleIcon from '../assets/apple-icon.svg';

const FinalStep: FC = () => {
  return (
    <div className="download-page">
      <h1>Download our app</h1>
      <p>Solve the problem of finding places to eat once and for all.</p>
      <div style={{ display: 'flex' }}>
        <a href="https://apps.apple.com/th/app/vision-craft-ai/id6476929202" target="_blank" rel="noreferrer">
          <img src={appleIcon} alt="" />
        </a>
        <div style={{ width: `10px` }}></div>
        <a href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank" rel="noreferrer">
          <img src={googleIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default FinalStep;
