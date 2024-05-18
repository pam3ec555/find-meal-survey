import { FC } from 'react';
import CheckboxOption from '../components/CheckboxOption';
import { Option } from '../components/CheckboxOption';
import React from 'react';
import ContinueButton from '../components/ContinueButton';
import { usePostHog } from 'posthog-js/react';
import ReactPixel from 'react-facebook-pixel';

interface Porps {
  goNext: () => void;
}

const Step1: FC<Porps> = ({ goNext }) => {
  const posthog = usePostHog();
  const [selectedOptions, setSelectedOptions] = React.useState<Set<string>>(
    new Set()
  ); // [1]
  const options: Option[] = [
    {
      text: '🍔 Fast Food',
      id: 'fast_food',
    },
    {
      text: '🍀 Vegan',
      id: 'vegan',
    },
    {
      text: '🇨🇳 Chinese',
      id: 'chinese',
    },
    {
      text: '🇮🇳 Indian',
      id: 'indian',
    },
    {
      text: '🍕 Italian',
      id: 'italian',
    },
    {
      text: '🍱 Sushi',
      id: 'sushi',
    },
    {
      text: '🥐 French',
      id: 'french',
    },
    {
      text: '🌮 Mexican',
      id: 'mexican',
    },
    {
      text: '🇬🇷 Greek',
      id: 'greek',
    },
    {
      text: '🇹🇭 Thai',
      id: 'thai',
    },
  ];

  return (
    <>
      <h3>Choose your preferred cuisines:</h3>
      {options.map((option) => (
        <CheckboxOption
          id={option.id}
          key={option.id}
          label={option.text}
          checked={selectedOptions.has(option.id)}
          onChange={(val) => {
            if (val) {
              selectedOptions.add(option.id);
            } else {
              selectedOptions.delete(option.id);
            }
            setSelectedOptions(new Set(selectedOptions));
          }}
        />
      ))}
      <ContinueButton onClick={() => {
        posthog.capture('step1_completed', {
          selectedOptions: Array.from(selectedOptions),
        });
        ReactPixel.track("step1_completed");
        goNext();
      }}/>
    </>
  );
};

export default Step1;
