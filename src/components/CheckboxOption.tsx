import classNames from 'classnames';
import { FC } from 'react';

export interface Option {
  text: string;
  id: string;
}

interface Props {
  checked: boolean;
  label: string;
  onChange: (val: boolean) => void;
  id: string;
}

const CheckboxOption: FC<Props> = ({ checked, label, onChange, id }) => {
  return (
    <div
      className={classNames(`checkbox-option`, {
        'checkbox-option--selected': checked,
      })}
      onClick={() => {
        onChange(!checked);
      }}
    >
      <span>{label}</span>
      <input type="checkbox" id={id} checked={checked} onChange={() => {}} />
    </div>
  );
};

export default CheckboxOption;
