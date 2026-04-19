export interface ElectronicInvoicingProvider {
  generatePayload(invoice: Record<string, unknown>): Promise<Record<string, unknown>>;
  sendInvoice(payload: Record<string, unknown>): Promise<{ status: string; hash?: string; message?: string }>;
  cancelInvoice(invoiceId: string, reason: string): Promise<{ status: string; message: string }>;
  getStatus(reference: string): Promise<{ status: string; raw?: unknown }>;
}
