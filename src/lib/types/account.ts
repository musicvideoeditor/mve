export interface TransactionType {
  documentId: string;
  refId: string;
  paidBy: { username: string; name?: string };
  amount: number;
  updatedAt?: string;
  createdAt: string;
}
