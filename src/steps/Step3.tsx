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

const Step3: FC<Porps> = ({ goNext }) => {
  const posthog = usePostHog();
  const [selectedOptions, setSelectedOptions] = React.useState<Set<string>>(
    new Set()
  ); // [1]
  const options: Option[] = [
    {
      text: '🗺️ Online Maps',
      id: 'online_maps',
    },
    {
      text: '📸 Recommendations from Social Media',
      id: 'social_media',
    },
    {
      text: '🤗 Recommendations from Friends',
      id: 'friends',
    },
    {
      text: '💪 By yourself',
      id: 'by_yourself',
    },
    {
      text: '📱 Other services',
      id: 'other_services',
    },
  ];

  return (
    <>
      <h3>How do you usually search for a place to eat?</h3>
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
      <ContinueButton
        onClick={() => {
          posthog.capture('step3_completed', {
            selectedOptions: Array.from(selectedOptions),
          });
          ReactPixel.track("step3_completed");
          goNext();
        }}
      />
    </>
  );
};

export default Step3;
