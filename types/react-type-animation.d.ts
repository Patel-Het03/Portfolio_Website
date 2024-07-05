declare module 'react-type-animation' {
    import { ComponentType } from 'react';
  
    interface TypeAnimationProps {
      sequence: (string | number)[];
      wrapper: string;
      speed?: number;
      repeat?: number;
    }
  
    const TypeAnimation: ComponentType<TypeAnimationProps>;
  
    export default TypeAnimation;
  }
  