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

const Step2: FC<Porps> = ({ goNext }) => {
  const posthog = usePostHog();
  const [selectedOptions, setSelectedOptions] = React.useState<Set<string>>(
    new Set()
  ); // [1]
  const options: Option[] = [
    {
      text: '0 - $5',
      id: 'price1',
    },
    {
      text: '$5 - $10',
      id: 'price2',
    },
    {
      text: '$10 - $20',
      id: 'price3',
    },
    {
      text: '$20 - $50',
      id: 'price4',
    },
    {
      text: '$50 - $100',
      id: 'price5',
    },
    {
      text: '$100+',
      id: 'price6',
    },
  ];

  return (
    <>
      <h3>How much do you normally spend at a cafe or restaurant per person?</h3>
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
        posthog.capture('step2_completed', {
          selectedOptions: Array.from(selectedOptions),
        });
        ReactPixel.track("step2_completed");
        goNext();
      }}/>
    </>
  );
};

export default Step2;
