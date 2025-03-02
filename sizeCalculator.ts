
```typescript
/**
 * 身長と体重から胸囲を推定する関数
 */
export const calculateChest = (height: number, weight: number): number => {
  return (height * 0.35) + (weight * 0.15) + 30;
};

/**
 * 胸囲からサイズを推定する関数
 */
export const getSizeFromChest = (chest: number): string => {
  if (chest < 95) return 'S';
  if (chest < 100) return 'M';
  if (chest < 105) return 'L';
  return 'XL';
};

/**
 * 身長と体重から直接サイズを推定する関数
 */
export const recommendSize = (height: number, weight: number): string => {
  const chest = calculateChest(height, weight);
  return getSizeFromChest(chest);
};
```
