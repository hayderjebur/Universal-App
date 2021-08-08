import { TextField } from '@material-ui/core';
import { ITextField } from '../../interface/textField';

const TextFieldComponent: React.FC<ITextField> = ({
  id,
  label,
  name,
  autoComplete,
  value,
  helperText,
  error,
  required,
  onChange,
}) => {
  return (
    <div>
      <TextField
        id={id}
        label={label}
        name={name}
        autoComplete={autoComplete}
        fullWidth
        required={required}
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        helperText={helperText}
        error={error}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default TextFieldComponent;
