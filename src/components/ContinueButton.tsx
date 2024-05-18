import { FC } from 'react';

interface Props {
  onClick: () => void;
}

const ContinueButton: FC<Props> = ({ onClick }) => {
  return (
    <div className="continue-btn-wrapper">
      <button className="btn" onClick={onClick}>
        Continue
      </button>
    </div>
  );
};

export default ContinueButton;
