import type { SortOption } from '../types/Repos/ReposTypes';

export const options: SortOption[] = [
  { value: 'stars', label: 'Star count' },
  { value: 'name', label: 'Alphabetical' },
  { value: 'updated', label: 'New first' },
];
