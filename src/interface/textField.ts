import React, { ChangeEvent } from 'react';

export interface ITextField {
  id: string;
  label: string;
  name: string;
  autoComplete: string;
  value: string;
  required: boolean;
  error?: boolean;
  helperText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
