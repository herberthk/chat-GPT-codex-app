import classNames from "classnames";
import { FC, ReactNode, TextareaHTMLAttributes } from "react";
import { getValidStyle } from "../util/helpers";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Title of textarea. Used as label */
  label?: ReactNode;
  /** Description block shown below the textarea. */
  message?: ReactNode;
  /** Custom class name for root label element. */
  className?: string;
  /**
   * Used to control the styling of the field and surrounding elements.
   * Set this value to `false` to show invalid styling.
   * Set this value to `true` to show valid styling.
   */
  isValid?: boolean;
  /** Disable textarea behavior */
  disabled?: boolean;
  /**
   * Allow resizing
   *
   * @default true
   */
  resizeable?: boolean;
  /** Custom class name for textarea element. */
  inputClassName?: string;
  preFix?: ReactNode;
  suffix?: ReactNode;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  inputClassName,
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
        <textarea
          className={classNames(
            "input min-h-[72px] flex-1",
            getValidStyle(isValid),
            inputClassName
          )}
          {...rest}
        />
        {suffix}
      </div>
    </div>
  );
};

export default TextArea;
