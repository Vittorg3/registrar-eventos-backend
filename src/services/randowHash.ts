import { v4 } from 'uuid';

export const buildHash = () => {
    return v4();
};