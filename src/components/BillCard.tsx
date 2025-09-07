
import { Bill, Customer } from "@/utils/mockData";
import { formatRupiah, formatDate, getStatusColor } from "@/utils/helpers";
import { Link } from "react-router-dom";

interface BillCardProps {
  bill: Bill;
  customer: Customer;
}

const BillCard = ({ bill, customer }: BillCardProps) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Tagihan PDAM {bill.period}
            </h3>
            <p className="text-gray-500 text-sm">
              Jatuh Tempo: {formatDate(bill.dueDate)}
            </p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(bill.status)}`}>
            {bill.status === 'paid' ? 'Lunas' : bill.status === 'overdue' ? 'Terlambat' : 'Belum Bayar'}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600">Nomor Pelanggan</span>
            <span className="font-medium">{customer.customerId}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600">Nama</span>
            <span className="font-medium">{customer.name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-gray-600">Pemakaian</span>
            <span className="font-medium">{bill.usage} m³</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="text-gray-600">Total Tagihan</span>
            <span className="font-bold text-sky-700">{formatRupiah(bill.amount)}</span>
          </div>
        </div>

        {!bill.isPaid && (
          <div className="mt-5">
            <Link to={`/payment/${bill.id}`}>
              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded transition duration-200">
                Bayar Sekarang
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillCard;
