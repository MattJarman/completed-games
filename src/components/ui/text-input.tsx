import { ComponentProps, FC } from "react";

export type TextInputProps = ComponentProps<"input"> & {
  Icon: FC<{ className?: string }>;
};

const TextInput: FC<TextInputProps> = ({ Icon, ...props }) => (
  <div className="bg-gray-800 rounded-md">
    <div className="flex p-2 mx-auto">
      <label htmlFor={props.id} className="flex items-center flex-none pr-3">
        <span className="sr-only">{props.name}</span>
        <Icon className="w-5 h-5 text-gray-500" />
      </label>
      <input
        type="text"
        className="flex-auto h-5 leading-6 text-gray-300 placeholder-gray-600 bg-transparent focus:outline-none focus:placeholder-gray-400"
        {...props}
      />
    </div>
  </div>
);

export default TextInput;
