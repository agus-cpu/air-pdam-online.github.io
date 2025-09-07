
import { useState } from 'react';

interface PaymentMethodProps {
  onSelect: (method: string) => void;
}

const PaymentMethod = ({ onSelect }: PaymentMethodProps) => {
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (method: string) => {
    setSelected(method);
    onSelect(method);
  };

  const methods = [
    {
      id: 'bank_transfer',
      name: 'Transfer Bank',
      description: 'Transfer melalui ATM, Internet Banking, atau Mobile Banking',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      )
    },
    {
      id: 'credit_card',
      name: 'Kartu Kredit',
      description: 'Bayar dengan kartu kredit Visa, Mastercard, atau JCB',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      )
    },
    {
      id: 'e_wallet',
      name: 'E-Wallet',
      description: 'Bayar dengan OVO, GoPay, DANA, atau ShopeePay',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Pilih Metode Pembayaran</h3>
      <div className="space-y-3">
        {methods.map(method => (
          <div 
            key={method.id} 
            className={`border rounded-lg p-4 cursor-pointer ${
              selected === method.id ? 'border-sky-500 bg-sky-50' : 'border-gray-200 hover:border-sky-300'
            }`}
            onClick={() => handleSelect(method.id)}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${selected === method.id ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-600'}`}>
                {method.icon}
              </div>
              <div>
                <h4 className="font-medium">{method.name}</h4>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
              <div className="ml-auto">
                <div className={`w-6 h-6 rounded-full border ${
                  selected === method.id 
                    ? 'border-sky-500 bg-sky-500' 
                    : 'border-gray-300'
                }`}>
                  {selected === method.id && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
