```typescript
import React, { useState } from 'react';

const MeasurementForm: React.FC = () => {
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (height === '' || weight === '') {
      setMessage('身長と体重を入力してください');
      return;
    }
    
    // ローカルストレージに保存
    localStorage.setItem('height', height.toString());
    localStorage.setItem('weight', weight.toString());
    setMessage('測定値を保存しました');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">サイズ推薦のための測定値入力</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            身長 (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : '')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            min="100"
            max="250"
            step="0.1"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            体重 (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : '')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            min="30"
            max="200"
            step="0.1"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          保存
        </button>
      </form>
      
      {message && (
        <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default MeasurementForm;
```
