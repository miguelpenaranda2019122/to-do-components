import type { StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>;
  text: string;
  OnPress: () => void;
};
