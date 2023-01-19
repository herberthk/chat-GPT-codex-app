import classNames from "classnames";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import { getValidStyle } from "../util/helpers";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /** Title of the input. Used as label */
  label?: string | ReactNode;
  /** Custom class name for textarea element. */
  otherClasses?: string;
  /**
   * Used to control the styling of the field and surrounding elements.
   * Set this value to `false` to show invalid styling.
   * Set this value to `true` to show valid styling.
   */
  isValid?: boolean;
  preFix?: ReactNode;
  suffix?: ReactNode;
}

export const TextInput: FC<Props> = ({
  label,
  otherClasses,
  isValid,
  preFix,
  suffix,
  ...rest
}) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      {label && <p className="text-lg">{label}</p>}
      <div className="flex w-full justify-between">
        {preFix}
        <input
          className={classNames(
            "input flex-1",
            getValidStyle(isValid),
            otherClasses
          )}
          {...rest}
        />
        {suffix}
      </div>
    </div>
  );
};
